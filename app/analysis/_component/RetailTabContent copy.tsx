"use client"
import React from "react";
import ProductPrices from "./ProductPrices";
import { useSidebar } from "@/components/ui/sidebar";

export default function RetailTabContent() {
  const {open} = useSidebar();
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
      <div className={`${open ? "w-[500px]" : "w-[580px]"}`}>
        <ProductPrices/>
      </div>
      <div className={`${open ? "w-[585px]" : "w-[600px]"}`}>
        <ProductPrices/>
      </div>
    </div>
  );
}
