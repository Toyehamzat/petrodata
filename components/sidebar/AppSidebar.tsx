"use client";
import {
  BookOpen,
  LayoutDashboard,
  ChartNoAxesColumn,
  Sparkle,
  BookmarkMinus,
  Settings,
} from "lucide-react";
import Image from "next/image";
import logo from "@/app/icon.svg";
import { useSidebar } from "@/components/ui/sidebar";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: LayoutDashboard,
  },
  {
    title: "Analysis",
    url: "#",
    icon: ChartNoAxesColumn,
  },
  {
    title: "News and Report",
    url: "#",
    icon: BookOpen,
  },
  {
    title: "Exclusive report",
    url: "#",
    icon: Sparkle,
  },
  {
    title: "Watchlist",
    url: "#",
    icon: BookmarkMinus,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  const { open } = useSidebar();
  return (
    <Sidebar collapsible="icon">
      <div className="flex justify-center items-center">
        <a href="#" className="flex items-center gap-2 px-4 py-3">
          <Image src={logo} alt="Petrodara Logo" className="h-6 w-6" />
          {open && (
            <div className="font-medium text-2xl">
              <span className="text-[#009688]">Petro</span>
              <span className="dark:text-white/80 text-slate-500">data</span>
            </div>
          )}
        </a>
      </div>
      <SidebarContent>
        <SidebarGroup className="h-[90%] flex flex-col justify-center">
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  className={
                    !open
                      ? "h-[48px] hover:text-[#009688] hover:border-r-2 border-[#009688] hover:bg-sidebar-accent rounded-l-3xl rounded-r-none flex justify-center items-center pr-2"
                      : "hover:border-r-2 border-[#009688]"
                  }
                >
                  <SidebarMenuButton
                    className={`rounded-l-3xl rounded-r-none h-[48px] font-medium hover:text-[#009688]  ${
                      !open ? "hover:bg-transparent" : ""
                    }`}
                    asChild
                  >
                    <a href={item.url}>
                      <item.icon size={24} />
                      {open && <span className="text-base">{item.title}</span>}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
