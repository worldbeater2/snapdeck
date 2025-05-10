"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Brain,
  Search,
  Bell,
  Home,
  BookOpen,
  Layers,
  BarChart2,
  Settings,
  PlusCircle,
  Clock,
  Star,
  ChevronRight,
  Zap,
  BookMarked,
  GraduationCap,
  Trophy,
  Calendar,
  Blocks,
  History,
} from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useRouter } from "next/navigation";
import { NavMain } from "@/components/nav-main";

export default function DashboardMainApp() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("overview");



  const recentDecks = [
    {
      id: 1,
      title: "Photosynthesis Process",
      cards: 24,
      progress: 68,
      lastStudied: "2 hours ago",
      subject: "Biology",
      color: "bg-emerald-500",
    },
    {
      id: 2,
      title: "JavaScript Fundamentals",
      cards: 42,
      progress: 35,
      lastStudied: "Yesterday",
      subject: "Computer Science",
      color: "bg-yellow-500",
    },
    {
      id: 3,
      title: "World War II Timeline",
      cards: 31,
      progress: 92,
      lastStudied: "3 days ago",
      subject: "History",
      color: "bg-blue-500",
    },
  ];

  const upcomingQuizzes = [
    {
      id: 1,
      title: "Photosynthesis Quiz",
      date: "Today",
      time: "4:00 PM",
      cards: 15,
    },
    {
      id: 2,
      title: "JavaScript Functions",
      date: "Tomorrow",
      time: "10:00 AM",
      cards: 20,
    },
  ];

  const achievements = [
    {
      id: 1,
      title: "Fast Learner",
      description: "Complete 5 study sessions in one day",
      progress: 80,
      icon: Zap,
    },
    {
      id: 2,
      title: "Knowledge Seeker",
      description: "Create 10 decks",
      progress: 60,
      icon: BookMarked,
    },
    {
      id: 3,
      title: "Perfect Score",
      description: "Get 100% on 3 quizzes",
      progress: 33,
      icon: Trophy,
    },
  ];

  const studyStats = {
    cardsStudied: 342,
    minutesStudied: 840,
    decksCreated: 12,
    quizzesTaken: 28,
    streakDays: 7,
  };
  return (

      <div className="flex h-screen bg-gray-50 font-manrope">
       

        <div className="flex-1 flex flex-col overflow-hidden">
          <header className="bg-white border-b border-gray-200 px-6 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <SidebarTrigger className="md:hidden" />
                <h1 className="text-lg font-semibold">Dashboard</h1>
              </div>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="hidden sm:flex gap-1 hover:bg-main/90 hover:text-white cursor-pointer"
                >
                  <Calendar className="h-4 w-4" />
                  <span>Schedule</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full relative hover:bg-main/90 hover:text-white cursor-pointer "
                >
                  <Bell className="h-5 w-5 " />
                  <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-purple-600 text-[10px] text-white flex items-center justify-center">
                    3
                  </span>
                </Button>
                <Button
                  size="sm"
                  onClick={() => router.push("/dashboard/my-decks/new-deck")}
                  className="gap-1 hidden sm:flex hover:bg-main hover:text-white bg-main/90 text-white cursor-pointer text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md"
                >
                  <PlusCircle className="h-4 w-4" />
                  <span>New Deck</span>
                </Button>
              </div>
            </div>
          </header>

          <main className="flex-1 overflow-auto p-6">
            <div className="max-w-7xl mx-auto space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4">
                    Welcome back, Jessica!
                  </h2>
                  <p className="text-gray-600 mb-6">
                    You've studied{" "}
                    <span className="font-semibold text-purple-600">
                      68 cards
                    </span>{" "}
                    this week. Keep up the good work!
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                    <Card className="bg-white border border-main/45">
                      <CardContent className="p-4">
                        <div className="text-xs text-gray-500 mb-1">
                          Study Streak
                        </div>
                        <div className="flex items-center gap-1">
                          <Zap className="h-4 w-4 text-yellow-500" />
                          <span className="text-xl font-bold">
                            {studyStats.streakDays} days
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="bg-white border-main/45">
                      <CardContent className="p-4">
                        <div className="text-xs text-gray-500 mb-1">
                          Cards Studied
                        </div>
                        <div className="flex items-center gap-1">
                          <Layers className="h-4 w-4 text-purple-500" />
                          <span className="text-xl font-bold">
                            {studyStats.cardsStudied}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="bg-white border-main/45">
                      <CardContent className="p-4">
                        <div className="text-xs text-gray-500 mb-1">
                          Time Studied
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4 text-blue-500" />
                          <span className="text-xl font-bold">
                            {Math.floor(studyStats.minutesStudied / 60)}h{" "}
                            {studyStats.minutesStudied % 60}m
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="bg-white border-main/45">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">
                        Upcoming Quizzes
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {upcomingQuizzes.map((quiz) => (
                          <div
                            key={quiz.id}
                            className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0"
                          >
                            <div>
                              <div className="font-medium">{quiz.title}</div>
                              <div className="text-xs text-gray-500">
                                {quiz.date} at {quiz.time} • {quiz.cards} cards
                              </div>
                            </div>
                            <Button
                              size="sm"
                              variant="outline"
                              className="h-8 cursor-pointer hover:bg-main/90 border-main/50    hover:text-white"
                            >
                              Start
                            </Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="gap-1 text-purple-600 cursor-pointer hover:text-white hover:bg-main/90"
                      >
                        <Calendar className="h-4 w-4" />
                        <span>View Schedule</span>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold">Recent Decks</h2>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="gap-1 text-main cursor-pointer hover:text-white hover:bg-main/90"
                    >
                      <span>View All</span>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="space-y-4">
                    {recentDecks.map((deck) => (
                      <Card
                        key={deck.id}
                        className="bg-white overflow-hidden border-main/50"
                      >
                        <div className="flex">
                          <div className={`${deck.color} w-2`}></div>
                          <div className="flex-1 p-4">
                            <div className="flex items-center justify-between mb-2">
                              <div>
                                <h3 className="font-medium">{deck.title}</h3>
                                <div className="text-xs text-gray-500">
                                  {deck.subject} • {deck.cards} cards
                                </div>
                              </div>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-full h-8 w-8"
                              >
                                <Star
                                  className="h-4 w-4"
                                  fill={deck.id === 3 ? "currentColor" : "none"}
                                />
                              </Button>
                            </div>
                            <div className="space-y-1">
                              <div className="flex items-center justify-between text-xs">
                                <span>Progress</span>
                                <span className="font-medium">
                                  {deck.progress}%
                                </span>
                              </div>
                              <Progress
                                value={deck.progress}
                                className="h-1.5"
                              />
                            </div>
                            <div className="flex items-center justify-between mt-3">
                              <div className="text-xs text-gray-500">
                                Last studied {deck.lastStudied}
                              </div>
                              <Button
                                size="sm"
                                className="h-8 cursor-pointer bg-main/90 text-white hover:bg-main"
                              >
                                Continue
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}

                    <Card className="bg-white border-dashed border-2 border-gray-200">
                      <CardContent className="p-4 flex flex-col items-center justify-center text-center h-32">
                        <PlusCircle className="h-8 w-8 text-gray-400 mb-2" />
                        <h3 className="font-medium text-gray-600">
                          Create New Deck
                        </h3>
                        <p className="text-xs text-gray-500">
                          Generate flashcards from any topic
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="bg-white col-span-1 border-main/45">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Study Recommendations
                    </CardTitle>
                    <CardDescription>
                      Based on your learning patterns
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 p-3 rounded-lg bg-purple-50 border border-purple-100">
                        <div className="bg-purple-100 rounded-full p-2">
                          <Zap className="h-5 w-5 text-purple-600" />
                        </div>
                        <div>
                          <h4 className="font-medium">Review Photosynthesis</h4>
                          <p className="text-xs text-gray-600 mt-1">
                            You're due to review 12 cards that are about to fade
                            from memory.
                          </p>
                          <Button
                            size="sm"
                            className="mt-2 h-8 bg-main/90 text-white hover:bg-main cursor-pointer"
                          >
                            Review Now
                          </Button>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3 rounded-lg bg-blue-50 border border-blue-100">
                        <div className="bg-blue-100 rounded-full p-2">
                          <GraduationCap className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-medium">Try a Practice Quiz</h4>
                          <p className="text-xs text-gray-600 mt-1">
                            Test your knowledge on JavaScript Fundamentals with
                            a quick quiz.
                          </p>
                          <Button
                            size="sm"
                            variant="outline"
                            className="mt-2 h-8 hover:bg-main/90 text-main border-main/50 hover:text-white cursor-pointer"
                          >
                            Start Quiz
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white col-span-1 lg:col-span-2 border-main/45 ">
                  <CardHeader>
                    <CardTitle className="text-lg">Your Achievements</CardTitle>
                    <CardDescription>
                      Track your learning milestones
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4   ">
                      {achievements.map((achievement) => (
                        <div
                          key={achievement.id}
                          className="border rounded-lg p-4 border-main/45 cursor-pointer"
                        >
                          <div className="flex items-center gap-2 mb-2 ">
                            <div className="bg-purple-100 rounded-full p-1.5">
                              <achievement.icon className="h-4 w-4 text-purple-600" />
                            </div>
                            <h4 className="font-medium text-sm">
                              {achievement.title}
                            </h4>
                          </div>
                          <p className="text-xs text-gray-500 mb-2">
                            {achievement.description}
                          </p>
                          <div className="space-y-1">
                            <div className="flex items-center justify-between text-xs">
                              <span>Progress</span>
                              <span>{achievement.progress}%</span>
                            </div>
                            <Progress
                              value={achievement.progress}
                              className="h-1.5"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </main>
        </div>
      </div>
    
  );
}
