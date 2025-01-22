import React, { useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import { Share } from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import SummaryModal from "./SummaryModal";

const chartData = {
  PMS: {
    "1D": [
      { time: "00:00", price: 10 },
      { time: "06:00", price: 112 },
      { time: "12:00", price: 50 },
      { time: "18:00", price: 113 },
      { time: "23:59", price: 500 },
    ],
    "1W": [
      { day: "Mon", price: 410 },
      { day: "Tue", price: 712 },
      { day: "Wed", price: 213 },
      { day: "Thu", price: 715 },
      { day: "Fri", price: 714 },
      { day: "Sat", price: 716 },
      { day: "Sun", price: 510 },
    ],
    "1M": [
      { date: "2025-01-01", price: 100 },
      { date: "2025-01-08", price: 710 },
      { date: "2025-01-15", price: 720 },
      { date: "2025-01-22", price: 630 },
    ],
    "3M": generateMockData(90, 700, 800),
    "6M": generateMockData(180, 650, 850),
    YTD: generateMockData(22, 680, 820),
    All: generateMockData(365, 600, 900),
  },
  AGO: {
    "1D": generateMockData(24, 105, 120),
    "1W": generateMockData(7, 700, 730),
    "1M": generateMockData(30, 680, 740),
    "3M": generateMockData(90, 670, 780),
    "6M": generateMockData(180, 640, 820),
    YTD: generateMockData(22, 670, 800),
    All: generateMockData(365, 580, 880),
  },
  ICE: {
    "1D": generateMockData(24, 100, 118),
    "1W": generateMockData(7, 690, 720),
    "1M": generateMockData(30, 670, 730),
    "3M": generateMockData(90, 660, 770),
    "6M": generateMockData(180, 630, 810),
    YTD: generateMockData(22, 660, 790),
    All: generateMockData(365, 570, 870),
  },
  DPK: {
    "1D": generateMockData(24, 102, 116),
    "1W": generateMockData(7, 695, 725),
    "1M": generateMockData(30, 675, 735),
    "3M": generateMockData(90, 665, 775),
    "6M": generateMockData(180, 635, 815),
    YTD: generateMockData(22, 665, 795),
    All: generateMockData(365, 575, 875),
  },
  LPG: {
    "1D": generateMockData(24, 103, 117),
    "1W": generateMockData(7, 698, 728),
    "1M": generateMockData(30, 678, 738),
    "3M": generateMockData(90, 668, 778),
    "6M": generateMockData(180, 638, 818),
    YTD: generateMockData(22, 668, 798),
    All: generateMockData(365, 578, 878),
  },
};

function generateMockData(points: number, min: number, max: number) {
  const data = [];
  for (let i = 0; i < points; i++) {
    const date = new Date();
    date.setDate(date.getDate() - (points - i));
    data.push({
      time: i.toString().padStart(2, "0") + ":00",
      day: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][date.getDay()],
      date: date.toISOString().split("T")[0],
      price: min + Math.random() * (max - min),
    });
  }
  return data;
}

type ProductType = keyof typeof chartData;
type TimeFrame = keyof (typeof chartData)["PMS"];

const RetailPriceChart = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductType>("PMS");
  const [timeFrame, setTimeFrame] = useState<TimeFrame>("1D");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentData = chartData[selectedProduct][timeFrame];
  const timeFrames: TimeFrame[] = ["1D", "1W", "1M", "3M", "6M", "YTD", "All"];
  return (
    <Card className="bg-[#171717] border-zinc-800 rounded-[8px] w-full h-[320px]">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 pt-0">
        <div className="flex items-center gap-1 sm:gap-2 pt-6">
          <h3 className="text-xs sm:text-sm text-[#FAFAFA] font-normal">
            Retail price analysis (NGN)
          </h3>
          <Share className="w-4 h-4 text-[#A3A3A3] cursor-pointer" />
        </div>
        <div className="space-x-0 sm:space-x-4">
          {Object.keys(chartData).map((product) => (
            <button
              key={product}
              onClick={() => setSelectedProduct(product as ProductType)}
              className={`px-1 pt-6 text-xs transition-color s ${
                selectedProduct === product
                  ? "text-[#009688] border-t-2 border-[#009688]"
                  : "text-[#A3A3A3] hover:text-[#009688] hover:border-t-2 border-[#009688]"
              }`}
            >
              {product}
            </button>
          ))}
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="h-[178px] px-2">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={currentData}>
              {/* <Tooltip
                contentStyle={{
                  backgroundColor: "#1a1a1a",
                  border: "none",
                  borderRadius: "4px",
                  color: "#fff",
                  fontSize: "12px",
                }}
              /> */}
              <Line
                type="linear"
                dataKey="price"
                stroke="#12B76A"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-end px-6 py-2">
          <span
            onClick={() => setIsModalOpen(true)}
            className="text-[#00897B] text-xs sm:text-sm font-medium cursor-pointer hover:text-green-300"
          >
            View detailed summary
          </span>
          <SummaryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
        <div className="flex justify-between items-center px-4 border-t border-[#464646]">
          <div className="flex  sm:gap-3">
            {timeFrames.map((frame) => (
              <button
                key={frame}
                onClick={() => setTimeFrame(frame)}
                className={`px-1 py-4 sm:py-2.5 text-xs transition-colors ${
                  timeFrame === frame
                    ? "text-[#009688] border-t-2 border-[#009688]"
                    : "text-[#A3A3A3] hover:text-[#009688] hover:border-t-2 border-[#009688]"
                }`}
              >
                {frame}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-1">
            <Select>
              <SelectTrigger className="w-[55px] sm:w-[100px] h-8 bg-transparent text-[#00897B] text-xs sm:text-sm border-none">
                <SelectValue placeholder="Region" />
              </SelectTrigger>
              <SelectContent className="bg-[#404040]">
                <SelectItem value="north">North</SelectItem>
                <SelectItem value="south">South</SelectItem>
                <SelectItem value="east">East</SelectItem>
                <SelectItem value="west">West</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[55px] sm:w-[100px] h-8 bg-transparent text-[#00897B] text-xs sm:text-sm border-none">
                <SelectValue placeholder="State" />
              </SelectTrigger>
              <SelectContent className="bg-[#404040]">
                <SelectItem value="lagos">Lagos</SelectItem>
                <SelectItem value="abuja">Abuja</SelectItem>
                <SelectItem value="kano">Kano</SelectItem>
                <SelectItem value="rivers">Rivers</SelectItem>
              </SelectContent>
            </Select>
            <span className="text-[#12B76A] text-xs">
              •<span className="text-[#A3A3A3]"> Price</span>
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RetailPriceChart;
