"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const isDarkMode = theme === "dark"

  const toggleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark")
  }

  return (
    <button
      onClick={toggleTheme}
      className={`relative h-[37px] w-[72px] rounded-full p-1 ${
        isDarkMode ? "bg-[#80CBC4]" : "bg-teal-500"
      } transition-colors duration-500`}
    >
      <div className="flex w-full justify-between px-2">
        <Sun
          className={`h-[18px] w-[18px] text-white transition-opacity duration-500 ${
            isDarkMode ? "opacity-50" : "opacity-100"
          }`}
        />
        <Moon
          className={`h-[18px] w-[18px] text-white transition-opacity duration-500 ${
            !isDarkMode ? "opacity-50" : "opacity-100"
          }`}
        />
      </div>
      <div
        className={`absolute left-1 top-0.5 flex items-center justify-center h-8 w-8 rounded-full shadow-md transform transition-transform duration-1000 ease-in-out ${
          isDarkMode ? "translate-x-8 bg-white" : "translate-x-0 bg-white"
        }`}
      >
        {isDarkMode ? (
          <Moon className="h-4 w-4 text-teal-500" />
        ) : (
          <Sun className="h-4 w-4 text-teal-500" />
        )}
      </div>
    </button>
  )
}
