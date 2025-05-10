"use client"

import { ChevronRight, type LucideIcon } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"

export function NavMain({
  items,
  isCollapsed,
}: {
  items: {
    title: string
    url: string
    icon?: LucideIcon
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
  isCollapsed?: boolean
}) {
  const pathname = usePathname()

  return (
    <SidebarGroup>
      {!isCollapsed && (
        <SidebarGroupLabel className="font-manrope">SnapDecks</SidebarGroupLabel>
      )}
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive || pathname.startsWith(item.url)}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link 
                  href={item.url}
                  className={cn(
                    "flex items-center w-full",
                    pathname === item.url ? 'text-purple-600' : '',
                    isCollapsed ? 'justify-center' : ''
                  )}
                >
                  {item.icon && (
                    <item.icon className={cn(
                      "transition-all duration-300",
                      isCollapsed ? "mx-auto" : "mr-2"
                    )} />
                  )}
                  {!isCollapsed && <span>{item.title}</span>}
                  {!isCollapsed && item.items && (
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  )}
                </Link>
              </SidebarMenuButton>

              {!isCollapsed && item.items && (
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.items.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton asChild>
                          <Link 
                            href={subItem.url}
                            className={cn(
                              "block w-full",
                              pathname === subItem.url ? 'text-purple-600' : ''
                            )}
                          >
                            <span>{subItem.title}</span>
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              )}
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
