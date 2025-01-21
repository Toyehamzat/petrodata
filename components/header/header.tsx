"use client";

import { FC } from "react";
import {
  LucideMenu,
  LucideSearch,
  LucideBell,
  LucideAlarmClockPlus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ModeToggle } from "../toggle/theme-toggle";
import { useSidebar } from "../ui/sidebar";

const Header: FC = () => {
  const { isMobile, toggleSidebar } = useSidebar();

  return (
    <header className="flex items-center justify-between w-full h-[60px] px-0">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        {isMobile && (
          <Button
            variant={"default"}
            className="bg-transparent text-primary hover:bg-transparent p-1"
            aria-label="Open Sidebar"
            onClick={toggleSidebar}
          >
            <LucideMenu className="h-6 w-6" />
          </Button>
        )}
        <div>
          <h1 className="text-lg md:text-2xl font-medium dark:text-[#F5F5F5] text-primary">
            Analysis
          </h1>
          <p className="text-xs md:text-base font-normal -mt-1 md:mt-0 text-[#A3A3A3]">
            Thursday, February 15
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-1 md:space-x-4">
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-accent bg-[#525252] text-white  focus-visible:ring-offset-background w-9 h-9"
          aria-label="Search"
        >
          <LucideSearch className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          className={cn("rounded-2xl bg-[#525252] text-white  w-9 md:w-28 h-9")}
          aria-label="Set Alert"
        >
          <LucideAlarmClockPlus className="h-4 w-4" />
          <span className="hidden md:block">Set alert</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-accent bg-[#525252] text-white  focus-visible:ring-offset-background w-9 h-9"
          aria-label="Notifications"
        >
          <LucideBell className="h-4 w-4" />
        </Button>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
