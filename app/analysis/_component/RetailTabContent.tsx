"use client";
import React from "react";
import ProductPrices from "./ProductPrices";
import WeeklyReport from "./WeeklyReport";
import { LucideSearch } from "lucide-react";
import { Input } from "@/components/ui/input";
export default function RetailTabContent() {
  return (
    <div className="w-full flex flex-col gap-8">
      <div className={`grid gap-4 grid-cols-1 md:grid-cols-[2fr_3fr]`}>
        <div className="w-full">
          <ProductPrices />
        </div>
        <div className="w-full">
          <ProductPrices />
        </div>
      </div>

      <div className="w-full flex flex-col gap-8 border-t-[1px] py-6 border-[#464646]">
        <div className="relative w-80 h-11">
          <LucideSearch className="absolute left-3 top-[22px] transform -translate-y-1/2 h-5 w-5 text-[#A3A3A3]" />
          <Input
            type="text"
            placeholder="Search..."
            className="bg-[#525252] border-none text-[#A3A3A3] pl-9 pr-4 rounded-2xl h-full w-full"
          />
        </div>
        <div>
          <WeeklyReport />
        </div>
      </div>
    </div>
  );
}
