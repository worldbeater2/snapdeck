"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  Search,
  Plus,
  Clock,
  Star,
  MoreHorizontal,
  Layers,
  BookOpen,
  Target,
  FileText,
  Trash2,
  Edit,
  Share2,
  Download,
  FolderOpen,
  Filter,
  ArrowUpDown,
  CheckCircle2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock data for decks
const mockDecks = [
  {
    id: "1",
    title: "Photosynthesis Process",
    description: "The biological process by which plants convert light energy into chemical energy",
    cards: 24,
    progress: 68,
    lastStudied: "2 hours ago",
    dateCreated: "2023-05-10T14:48:00",
    subject: "Biology",
    isFavorite: true,
    color: "emerald",
    hasQuiz: true,
    hasSummary: true,
    hasFlashcards: true,
  },
  {
    id: "2",
    title: "JavaScript Fundamentals",
    description: "Core concepts of JavaScript programming language including variables, functions, and objects",
    cards: 42,
    progress: 35,
    lastStudied: "Yesterday",
    dateCreated: "2023-05-08T09:23:00",
    subject: "Computer Science",
    isFavorite: false,
    color: "amber",
    hasQuiz: true,
    hasSummary: true,
    hasFlashcards: true,
  },
  {
    id: "3",
    title: "World War II Timeline",
    description: "Major events and battles of World War II from 1939 to 1945",
    cards: 31,
    progress: 92,
    lastStudied: "3 days ago",
    dateCreated: "2023-05-05T16:30:00",
    subject: "History",
    isFavorite: true,
    color: "blue",
    hasQuiz: true,
    hasSummary: true,
    hasFlashcards: false,
  },
  {
    id: "4",
    title: "Human Anatomy: Nervous System",
    description: "Structure and function of the human nervous system including the brain, spinal cord, and nerves",
    cards: 56,
    progress: 12,
    lastStudied: "1 week ago",
    dateCreated: "2023-04-28T11:15:00",
    subject: "Medicine",
    isFavorite: false,
    color: "red",
    hasQuiz: false,
    hasSummary: true,
    hasFlashcards: true,
  },
  {
    id: "5",
    title: "Introduction to Calculus",
    description: "Fundamental concepts of calculus including limits, derivatives, and integrals",
    cards: 38,
    progress: 0,
    lastStudied: "Never",
    dateCreated: "2023-05-11T08:45:00",
    subject: "Mathematics",
    isFavorite: false,
    color: "purple",
    hasQuiz: true,
    hasSummary: true,
    hasFlashcards: true,
  },
  {
    id: "6",
    title: "Spanish Vocabulary: Travel",
    description: "Essential Spanish vocabulary and phrases for traveling in Spanish-speaking countries",
    cards: 64,
    progress: 45,
    lastStudied: "4 days ago",
    dateCreated: "2023-04-20T13:10:00",
    subject: "Languages",
    isFavorite: false,
    color: "orange",
    hasQuiz: false,
    hasSummary: false,
    hasFlashcards: true,
  },
]

// Color mapping for subject badges and card accents
const colorMap: Record<string, { bg: string; text: string; light: string; border: string }> = {
  emerald: {
    bg: "bg-emerald-500",
    text: "text-emerald-700",
    light: "bg-emerald-50",
    border: "border-emerald-200",
  },
  amber: {
    bg: "bg-amber-500",
    text: "text-amber-700",
    light: "bg-amber-50",
    border: "border-amber-200",
  },
  blue: {
    bg: "bg-blue-500",
    text: "text-blue-700",
    light: "bg-blue-50",
    border: "border-blue-200",
  },
  red: {
    bg: "bg-red-500",
    text: "text-red-700",
    light: "bg-red-50",
    border: "border-red-200",
  },
  purple: {
    bg: "bg-purple-500",
    text: "text-purple-700",
    light: "bg-purple-50",
    border: "border-purple-200",
  },
  orange: {
    bg: "bg-orange-500",
    text: "text-orange-700",
    light: "bg-orange-50",
    border: "border-orange-200",
  },
}

export default function MyDecksPage() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("all")
  const [sortBy, setSortBy] = useState("recent")
  const [subjectFilter, setSubjectFilter] = useState("all")

  // Filter decks based on search query, active tab, and subject filter
  const filteredDecks = mockDecks.filter((deck) => {
    // Search filter
    const matchesSearch =
      searchQuery === "" ||
      deck.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      deck.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      deck.subject.toLowerCase().includes(searchQuery.toLowerCase())

    // Tab filter
    const matchesTab =
      activeTab === "all" ||
      (activeTab === "favorites" && deck.isFavorite) ||
      (activeTab === "in-progress" && deck.progress > 0 && deck.progress < 100) ||
      (activeTab === "completed" && deck.progress === 100) ||
      (activeTab === "not-started" && deck.progress === 0)

    // Subject filter
    const matchesSubject = subjectFilter === "all" || deck.subject === subjectFilter

    return matchesSearch && matchesTab && matchesSubject
  })

  // Sort decks based on sort option
  const sortedDecks = [...filteredDecks].sort((a, b) => {
    switch (sortBy) {
      case "recent":
        return new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime()
      case "oldest":
        return new Date(a.dateCreated).getTime() - new Date(b.dateCreated).getTime()
      case "name-asc":
        return a.title.localeCompare(b.title)
      case "name-desc":
        return b.title.localeCompare(a.title)
      case "last-studied":
        // Handle "Never" case
        if (a.lastStudied === "Never") return 1
        if (b.lastStudied === "Never") return -1
        return a.lastStudied.localeCompare(b.lastStudied)
      case "progress":
        return b.progress - a.progress
      default:
        return 0
    }
  })

  // Get unique subjects for filter
  const subjects = Array.from(new Set(mockDecks.map((deck) => deck.subject)))

  return (
    <div className="container max-w-7xl mx-auto py-8 px-4 sm:px-6 font-manrope">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold">My Decks</h1>
          <p className="text-gray-600">Manage and study your learning decks</p>
        </div>
        <Button
          onClick={() => router.push("/dashboard/my-decks/new-deck")}
          className="bg-main hover:bg-main/90 text-white flex items-center gap-2 cursor-pointer"
        >
          <Plus className="h-4 w-4" />
          Create New Deck
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Search decks by title, description, or subject..."
            className="pl-10 border border-main/50 focus-visible:ring-main/60 focus-visible:ring-2 focus-visible:ring-offset-2"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <Select value={subjectFilter} onValueChange={setSubjectFilter}>
            <SelectTrigger className="w-full sm:w-[180px] border border-main/50 cursor-pointer">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4  " />
                <SelectValue placeholder="Filter by Subject" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Subjects</SelectLabel>
                <SelectItem   value="all">All Subjects</SelectItem>
                {subjects.map((subject) => (
                  <SelectItem key={subject} value={subject}>
                    {subject}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full sm:w-[180px] border border-main/50 cursor-pointer">
              <div className="flex items-center gap-2">
                <ArrowUpDown className="h-4 w-4" />
                <SelectValue placeholder="Sort by" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Sort Options</SelectLabel>
                <SelectItem value="recent">Most Recent</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
                <SelectItem value="name-asc">Name (A-Z)</SelectItem>
                <SelectItem value="name-desc">Name (Z-A)</SelectItem>
                <SelectItem value="last-studied">Last Studied</SelectItem>
                <SelectItem value="progress">Progress</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mb-6">
        <TabsList className="w-full grid grid-cols-2 sm:grid-cols-5 mb-2">
          <TabsTrigger value="all" className="data-[state=active]:bg-main data-[state=active]:text-white cursor-pointer">
            All Decks
          </TabsTrigger>
          <TabsTrigger value="favorites" className="data-[state=active]:bg-main data-[state=active]:text-white cursor-pointer">
            <Star className="h-4 w-4 mr-1" />
            Favorites
          </TabsTrigger>
          <TabsTrigger value="in-progress" className="data-[state=active]:bg-main data-[state=active]:text-white cursor-pointer">
            <Clock className="h-4 w-4 mr-1" />
            In Progress
          </TabsTrigger>
          <TabsTrigger value="completed" className="data-[state=active]:bg-main data-[state=active]:text-white cursor-pointer">
            <CheckCircle2 className="h-4 w-4 mr-1" />
            Completed
          </TabsTrigger>
          <TabsTrigger value="not-started" className="data-[state=active]:bg-main data-[state=active]:text-white cursor-pointer">
            <FolderOpen className="h-4 w-4 mr-1" />
            Not Started
          </TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-0">
          {sortedDecks.length === 0 ? (
            <div className="text-center py-12 px-4 border rounded-lg bg-gray-50">
              <div className="mx-auto w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <Layers className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">No decks found</h3>
              <p className="text-gray-500 max-w-md mx-auto mb-6">
                {searchQuery
                  ? `No decks match your search for "${searchQuery}". Try a different search term or clear filters.`
                  : activeTab === "favorites"
                    ? "You haven't marked any decks as favorites yet."
                    : activeTab === "in-progress"
                      ? "You don't have any decks in progress."
                      : activeTab === "completed"
                        ? "You haven't completed any decks yet."
                        : activeTab === "not-started"
                          ? "All your decks have been started."
                          : "You don't have any decks yet. Create your first deck to get started."}
              </p>
              <Button
                onClick={() => router.push("/dashboard/decks/create")}
                className="bg-purple-600 hover:bg-purple-700"
              >
                Create Your First Deck
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedDecks.map((deck) => (
                <Card
                  key={deck.id}
                  className="overflow-hidden hover:shadow-md transition-shadow border border-gray-200 flex flex-col"
                >
                  <div className={`h-2 ${colorMap[deck.color].bg}`}></div>
                  <CardContent className="p-5 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <Link
                          href={`/dashboard/decks/${deck.id}`}
                          className="font-medium text-lg hover:text-purple-700 transition-colors line-clamp-1"
                        >
                          {deck.title}
                        </Link>
                        <p className="text-gray-500 text-sm line-clamp-2 h-10">{deck.description}</p>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-56">
                          <DropdownMenuLabel>Deck Options</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="cursor-pointer">
                            <BookOpen className="h-4 w-4 mr-2" />
                            <span>Study Deck</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="cursor-pointer">
                            <Target className="h-4 w-4 mr-2" />
                            <span>Take Quiz</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="cursor-pointer">
                            <FileText className="h-4 w-4 mr-2" />
                            <span>View Summary</span>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="cursor-pointer">
                            <Edit className="h-4 w-4 mr-2" />
                            <span>Edit Deck</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="cursor-pointer">
                            <Share2 className="h-4 w-4 mr-2" />
                            <span>Share Deck</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="cursor-pointer">
                            <Download className="h-4 w-4 mr-2" />
                            <span>Download</span>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="cursor-pointer text-red-600 focus:text-red-600">
                            <Trash2 className="h-4 w-4 mr-2" />
                            <span>Delete Deck</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      <Badge
                        className={`${colorMap[deck.color].light} ${colorMap[deck.color].text} ${
                          colorMap[deck.color].border
                        } border`}
                      >
                        {deck.subject}
                      </Badge>
                      <Badge variant="outline" className="bg-white">
                        {deck.cards} cards
                      </Badge>
                    </div>

                    <div className="flex items-center gap-2 mb-1 mt-auto">
                      <div className="flex items-center gap-1">
                        {deck.hasFlashcards && (
                          <div className="text-purple-600 bg-purple-50 rounded-full p-1" title="Flashcards">
                            <Layers className="h-3 w-3" />
                          </div>
                        )}
                        {deck.hasQuiz && (
                          <div className="text-purple-600 bg-purple-50 rounded-full p-1" title="Quiz">
                            <Target className="h-3 w-3" />
                          </div>
                        )}
                        {deck.hasSummary && (
                          <div className="text-purple-600 bg-purple-50 rounded-full p-1" title="Summary">
                            <FileText className="h-3 w-3" />
                          </div>
                        )}
                      </div>
                      <div className="ml-auto">
                        <Button
                          variant="ghost"
                          size="icon"
                          className={`h-7 w-7 rounded-full ${
                            deck.isFavorite
                              ? "text-yellow-500 hover:text-yellow-600"
                              : "text-gray-400 hover:text-gray-500"
                          }`}
                          title={deck.isFavorite ? "Remove from favorites" : "Add to favorites"}
                        >
                          <Star className="h-4 w-4" fill={deck.isFavorite ? "currentColor" : "none"} />
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-1 mt-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-500">Progress</span>
                        <span className="font-medium">{deck.progress}%</span>
                      </div>
                      <Progress value={deck.progress} className="h-1.5" />
                    </div>

                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                      <div className="text-xs text-gray-500 flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {deck.lastStudied === "Never" ? "Not studied yet" : `Last studied ${deck.lastStudied}`}
                      </div>
                      <Button
                        size="sm"
                        className="h-8 bg-purple-600 hover:bg-purple-700"
                        onClick={() => router.push(`/dashboard/decks/${deck.id}`)}
                      >
                        {deck.progress === 0 ? "Start" : "Continue"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
