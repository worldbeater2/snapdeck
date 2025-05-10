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
  Menu,
  X,
  ChevronLeft,
} from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
import { cn } from "@/lib/utils";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("overview");
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navItems = [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: Home,
    },
    {
      title: "My Decks",
      url: "/dashboard/my-decks",
      icon: Layers,
    //   items: [
    //     {
    //       title: "All Decks",
    //       url: "/dashboard/decks",
    //     },
    //     {
    //       title: "Favorites",
    //       url: "/dashboard/decks/favorites",
    //     },
    //     {
    //       title: "Recent",
    //       url: "/dashboard/decks/recent",
    //     },
    //   ],
    },
    {
      title: "Builder",
      url: "/dashboard/builder",
      icon: Blocks,
      items: [
        {
          title: "Active Sessions",
          url: "/dashboard/study/active",
        },
        {
          title: "Completed",
          url: "/dashboard/study/completed",
        },
        {
          title: "Schedule",
          url: "/dashboard/study/schedule",
        },
      ],
    },
    {
      title: "Study History",
      url: "/dashboard/history",
      icon: History,
    },
    {
      title: "Progress",
      url: "/dashboard/progress",
      icon: BarChart2,
    },
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: Settings,
    },
  ];

  return (
    <SidebarProvider>
      <div className="flex h-screen bg-gray-50 font-manrope">
        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="fixed cursor-pointer top-4 left-4 z-50 md:hidden"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>

        {/* Sidebar */}
        <Sidebar
          className={cn(
            "border-r border-gray-200 transition-all duration-300",
            isCollapsed ? "w-[80px]" : "w-[280px]",
            "fixed md:relative z-40",
            "h-screen",
            "transform transition-transform duration-300",
            isCollapsed ? "-translate-x-full md:translate-x-0" : "translate-x-0"
          )}
        >
          <SidebarHeader 
            className={cn(
              "border-b border-gray-200 px-3 py-2",
              isCollapsed && "px-2"
            )}
          >
            <div className="flex items-center justify-between">
              {!isCollapsed && (
                <Link 
                  href="/dashboard" 
                  className="flex items-center gap-2 px-2"
                >
                  <Image
                    className="w-32 h-7"
                    src="/13.png"
                    alt="Logo"
                    width={100}
                    height={60}
                  />
                </Link>
              )}
              <Button
                variant="ghost"
                size="icon"
                className="hidden md:flex mx-auto cursor-pointer hover:bg-main/90 hover:text-white"
                onClick={() => setIsCollapsed(!isCollapsed)}
              >
                <ChevronLeft className={cn(
                  "h-4 w-4 transition-transform flex duration-300",
                  isCollapsed && "rotate-180"
                )} />
              </Button>
            </div>
            {!isCollapsed && (
              <div className="relative mt-3">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="w-full bg-gray-100 pl-9 py-2 text-sm rounded-lg border-transparent focus:border-main"
                />
              </div>
            )}
          </SidebarHeader>

          <SidebarContent>
            <NavMain items={navItems} isCollapsed={isCollapsed} />
          </SidebarContent>

          <SidebarFooter className="border-t border-gray-200 p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder-user.jpg" alt="User" />
                  <AvatarFallback className="bg-purple-100 text-purple-700">
                    JD
                  </AvatarFallback>
                </Avatar>
                <div className="text-sm">
                  <div className="font-medium">Jessica Doe</div>
                  <div className="text-xs text-gray-500">Premium Plan</div>
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full h-8 w-8 cursor-pointer hover:bg-main/90 hover:text-white"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Log out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </SidebarFooter>
        </Sidebar>

        {/* Main Content */}
        <main 
          className={cn(
            "flex-1 overflow-y-auto transition-all duration-300",
            "pt-16 md:pt-0", // Add padding top for mobile menu button
            "px-4 md:px-6"
          )}
        >
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
