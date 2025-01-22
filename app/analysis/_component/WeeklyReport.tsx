import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import { Download } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProductData {
  name: string;
  fullName: string;
  currentPrice: number;
  currency: string;
  performance: {
    value: number;
    percentage: number;
  };
  chartData: number[];
}

interface WeeklyReportProps {
  weekNumber: number;
  year: number;
  products: ProductData[];
}

const MiniChart = ({ data, color }: { data: number[]; color: string }) => {
  const chartData = data.map((value, index) => ({ value, index }));

  return (
    <div className="w-24 h-8">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <Line
            type="monotone"
            dataKey="value"
            stroke={color}
            strokeWidth={1.5}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

const WeeklyReport: React.FC<WeeklyReportProps> = ({
  weekNumber,
  year,
  products,
}) => {
  const formatCurrency = (value: number, currency: string) => {
    return currency === "₦"
      ? `$${value.toFixed(2)}`
      : `${currency}${value.toFixed(2)}`;
  };

  const getPerformanceBgColor = (value: number) => {
    return value >= 0
      ? "bg-[#054F31] text-[#32D583]"
      : "bg-[#F04438] text-[#FDA29B]";
  };
  const getPerformanceTextColor = (value: number) => {
    return value >= 0 ? "text-[#12B76A]" : "text-[#F04438]";
  };
  const getChartColor = (value: number) => {
    return value >= 0 ? "#12B76A" : "#F04438";
  };

  return (
    <Card className="bg-transparent border-none p-0">
      <CardContent className="border-none p-0">
        <div className="mb-4">
          <h2 className="text-base font-semibold text-[#A3A3A3]">
            Report - Week {weekNumber}, {year}
          </h2>
        </div>

        <Table className="w-full bg-[#171717] border-zinc-800 rounded-[8px] text-xs">
          <TableHeader>
            <TableRow className="border-zinc-800 text-[#A3A3A3] text-xs font-normal">
              <TableHead className="">Product retail price</TableHead>
              <TableHead className="">Current price</TableHead>
              <TableHead className="">Performance</TableHead>
              <TableHead className="">7-day chart</TableHead>
              <TableHead className="">Required action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.name} className="border-zinc-800">
                <TableCell className="font-medium">
                  <div className="space-x-2 flex items-center">
                    <p className="text-xs font-medium leading-none text-zinc-200">
                      {product.name}
                    </p>
                    <p className="text-xs text-zinc-500 font-medium">
                      {product.fullName}
                    </p>
                  </div>
                </TableCell>
                <TableCell className="text-xs font-medium text-[#A3A3A3]">
                  {product.currency === "₦"
                    ? `₦${product.currentPrice.toFixed(2)}`
                    : formatCurrency(product.currentPrice, product.currency)}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span
                      className={getPerformanceTextColor(
                        product.performance.value
                      )}
                    >
                      {product.performance.value >= 0 ? "+" : ""}
                      {product.performance.value.toFixed(2)}
                    </span>
                    <Badge
                      variant="default"
                      className={`${getPerformanceBgColor(
                        product.performance.value
                      )} text-primary`}
                    >
                      {product.performance.value >= 0 ? "+" : ""}
                      {product.performance.percentage.toFixed(2)}%
                    </Badge>
                  </div>
                </TableCell>
                <TableCell>
                  <MiniChart
                    data={product.chartData}
                    color={getChartColor(product.performance.value)}
                  />
                </TableCell>
                <TableCell className="text-center">
                  <Download className="h-4 w-4 text-zinc-400" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

const Data = () => {
  const [showAllWeeks, setShowAllWeeks] = useState(false);
  const weeks = [
    {
      weekNumber: 31,
      year: 2024,
      products: [
        {
          name: "PMS",
          fullName: "Premium Motor Spirit",
          currentPrice: 714.26,
          currency: "₦",
          performance: { value: 0.37, percentage: 0.09 },
          chartData: [710, 712, 713, 714, 714, 714, 714.26],
        },
        {
          name: "AGO",
          fullName: "Automotive Gas Oil",
          currentPrice: 1249.06,
          currency: "₦",
          performance: { value: -9.01, percentage: -0.34 },
          chartData: [1260, 1255, 1252, 1250, 1249, 1249, 1249.06],
        },
        {
          name: "ICE",
          fullName: "ICE Brent Crude",
          currentPrice: 75.0,
          currency: "₦",
          performance: { value: 0.68, percentage: 0.9 },
          chartData: [74, 74.2, 74.5, 74.8, 75, 75, 75],
        },
        {
          name: "DKP",
          fullName: "Dual Purpose Kerosene",
          currentPrice: 1249.06,
          currency: "₦",
          performance: { value: -9.01, percentage: -0.34 },
          chartData: [1260, 1255, 1252, 1250, 1249, 1249, 1249.06],
        },
        {
          name: "LPG",
          fullName: "Liquified Petroleum Gas",
          currentPrice: 75.0,
          currency: "₦",
          performance: { value: 0.68, percentage: 0.9 },
          chartData: [74, 74.2, 74.5, 74.8, 75, 75, 75],
        },
      ],
    },
    {
      weekNumber: 30,
      year: 2024,
      products: [
        {
          name: "PMS",
          fullName: "Premium Motor Spirit",
          currentPrice: 710.0,
          currency: "₦",
          performance: { value: -4.26, percentage: -0.6 },
          chartData: [715, 713, 712, 711, 710, 710, 710],
        },
        {
          name: "AGO",
          fullName: "Automotive Gas Oil",
          currentPrice: 1260.0,
          currency: "₦",
          performance: { value: 10.94, percentage: 0.87 },
          chartData: [1250, 1253, 1255, 1258, 1259, 1260, 1260],
        },
        {
          name: "ICE",
          fullName: "ICE Brent Crude",
          currentPrice: 74.0,
          currency: "₦",
          performance: { value: -1.0, percentage: -1.33 },
          chartData: [75, 74.8, 74.5, 74.3, 74.1, 74, 74],
        },
        {
          name: "DKP",
          fullName: "Dual Purpose Kerosene",
          currentPrice: 1249.06,
          currency: "₦",
          performance: { value: -9.01, percentage: -0.34 },
          chartData: [1260, 1255, 1252, 1250, 1249, 1249, 1249.06],
        },
        {
          name: "LPG",
          fullName: "Liquified Petroleum Gas",
          currentPrice: 75.0,
          currency: "₦",
          performance: { value: 0.68, percentage: 0.9 },
          chartData: [74, 74.2, 74.5, 74.8, 75, 75, 75],
        },
      ],
    },
    {
      weekNumber: 29,
      year: 2024,
      products: [
        {
          name: "PMS",
          fullName: "Premium Motor Spirit",
          currentPrice: 710.0,
          currency: "₦",
          performance: { value: -4.26, percentage: -0.6 },
          chartData: [715, 713, 712, 711, 710, 710, 710],
        },
        {
          name: "AGO",
          fullName: "Automotive Gas Oil",
          currentPrice: 1260.0,
          currency: "₦",
          performance: { value: 10.94, percentage: 0.87 },
          chartData: [1250, 1253, 1255, 1258, 1259, 1260, 1260],
        },
        {
          name: "ICE",
          fullName: "ICE Brent Crude",
          currentPrice: 74.0,
          currency: "₦",
          performance: { value: -1.0, percentage: -1.33 },
          chartData: [75, 74.8, 74.5, 74.3, 74.1, 74, 74],
        },
        {
          name: "DKP",
          fullName: "Dual Purpose Kerosene",
          currentPrice: 1249.06,
          currency: "₦",
          performance: { value: -9.01, percentage: -0.34 },
          chartData: [1260, 1255, 1252, 1250, 1249, 1249, 1249.06],
        },
        {
          name: "LPG",
          fullName: "Liquified Petroleum Gas",
          currentPrice: 75.0,
          currency: "₦",
          performance: { value: 0.68, percentage: 0.9 },
          chartData: [74, 74.2, 74.5, 74.8, 75, 75, 75],
        },
      ],
    },
    {
      weekNumber: 28,
      year: 2024,
      products: [
        {
          name: "PMS",
          fullName: "Premium Motor Spirit",
          currentPrice: 710.0,
          currency: "₦",
          performance: { value: -4.26, percentage: -0.6 },
          chartData: [715, 713, 712, 711, 710, 710, 710],
        },
        {
          name: "AGO",
          fullName: "Automotive Gas Oil",
          currentPrice: 1260.0,
          currency: "₦",
          performance: { value: 10.94, percentage: 0.87 },
          chartData: [1250, 1253, 1255, 1258, 1259, 1260, 1260],
        },
        {
          name: "ICE",
          fullName: "ICE Brent Crude",
          currentPrice: 74.0,
          currency: "₦",
          performance: { value: -1.0, percentage: -1.33 },
          chartData: [75, 74.8, 74.5, 74.3, 74.1, 74, 74],
        },
        {
          name: "DKP",
          fullName: "Dual Purpose Kerosene",
          currentPrice: 1249.06,
          currency: "₦",
          performance: { value: -9.01, percentage: -0.34 },
          chartData: [1260, 1255, 1252, 1250, 1249, 1249, 1249.06],
        },
        {
          name: "LPG",
          fullName: "Liquified Petroleum Gas",
          currentPrice: 75.0,
          currency: "₦",
          performance: { value: 0.68, percentage: 0.9 },
          chartData: [74, 74.2, 74.5, 74.8, 75, 75, 75],
        },
      ],
    },
  ];

  const visibleWeeks = showAllWeeks ? weeks : weeks.slice(0, 3);

  return (
    <div className="space-y-6">
      {visibleWeeks.map((weekData) => (
        <WeeklyReport
          key={`${weekData.year}-${weekData.weekNumber}`}
          {...weekData}
        />
      ))}

      {weeks.length > 2 && (
        <div className="mt-4 text-center flex justify-center w-full ">
          <Button
            variant="ghost"
            className="hover:bg-accent bg-[#525252] text-white  focus-visible:ring-offset-background w-44 h-11"
            onClick={() => setShowAllWeeks(!showAllWeeks)}
          >
            {" "}
            {showAllWeeks ? "View Less" : "View More"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default Data;
