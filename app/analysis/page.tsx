"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Droplet,
  PlaneTakeoff,
  LightbulbIcon,
  DatabaseIcon,
  Warehouse,
  Ship,
} from "lucide-react";
import RetailTabContent from "./_component/RetailTabContent";

const TABS = [
  {
    value: "retail-price-analysis",
    label: "Retail price analysis",
    icon: Droplet,
    description:
      "Analyze retail fuel prices across different locations and time periods.",
  },
  {
    value: "flights-analysis",
    label: "Flights analysis",
    icon: PlaneTakeoff,
    description: "Analyze aviation fuel consumption and flight patterns.",
  },
  {
    value: "depots-analysis",
    label: "Depots analysis",
    icon: Warehouse,
    description: "Monitor fuel storage and distribution across depots.",
  },
  {
    value: "power-analysis",
    label: "Power analysis",
    icon: LightbulbIcon,
    description: "Analyze fuel consumption in power generation.",
  },
  {
    value: "cargo-analysis",
    label: "Cargo analysis",
    icon: Ship,
    description: "Track maritime fuel consumption and cargo movements.",
  },
  {
    value: "raw-data",
    label: "Raw data",
    icon: DatabaseIcon,
    description: "View and export raw fuel data records.",
  },
];

const SharedTabContent = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="grid gap-4 mt-32 sm:mt-20 md:mt-0 ">
    <div className="space-y-4">
      <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
      <p className="text-muted-foreground">{description}</p>
    </div>
  </div>
);

export default function Page() {
  return (
    <div className="w-full h-full">
      <Tabs defaultValue="retail-price-analysis" className="space-y-6">
        <TabsList className="flex flex-wrap justify-start gap-2 border-t-[0.8px] border-[#464646] bg-transparent rounded-none">
          {TABS.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="text-base font-medium hover:text-[#009688] data-[state=active]:outline-none data-[state=active]:text-[#009688] data-[state=active]:border-t-2 border-[#009688] px-2 pb-2"
            >
              <tab.icon className="mr-2 h-4 w-4" /> {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {TABS.filter((tab) => tab.value !== "retail-price-analysis").map(
          (tab) => (
            <TabsContent key={tab.value} value={tab.value}>
              <SharedTabContent
                title={tab.label}
                description={tab.description}
              />
            </TabsContent>
          )
        )}
        <TabsContent value="retail-price-analysis">
          <RetailTabContent />
        </TabsContent>
      </Tabs>
    </div>
  );
}
