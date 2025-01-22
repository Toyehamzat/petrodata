// app/api/weekly-report/route.ts
import {  NextResponse } from 'next/server';

interface FuelPrice {
  State: string;
  Period: string;
  AGO: number;
  PMS: number;
  DPK: number;
  LPG: number;
  Region: string;
}

interface WeeklyReport {
  week: number;
  currentPrice: number;
  performance: {
    value: number;
    percentage: number;
  };
  chartData: number[];
}

interface WeeklyProductReport {
  PMS: WeeklyReport;
  AGO: WeeklyReport;
  DPK: WeeklyReport;
  LPG: WeeklyReport;
}

export async function GET() {
  // In production, you'd fetch this from your database
  const fuelPrices: FuelPrice[] = [/* your JSON data here */];
  
  // Sort prices by date
  const sortedPrices = fuelPrices.sort((a, b) => 
    new Date(a.Period).getTime() - new Date(b.Period).getTime()
  );

  // Get first and last dates
  const startDate = new Date(sortedPrices[0].Period);
  const endDate = new Date(sortedPrices[sortedPrices.length - 1].Period);

  // Calculate total number of weeks
  const totalWeeks = Math.ceil((endDate.getTime() - startDate.getTime()) / (7 * 24 * 60 * 60 * 1000));

  // Group data by dates
  const groupedByDate = groupByDate(sortedPrices);
  
  // Calculate daily averages for each product
  const dailyAverages = calculateDailyAverages(groupedByDate);

  // Generate reports for all weeks
  const weeklyReports = [];
  for (let week = 1; week <= totalWeeks; week++) {
    const report = generateWeeklyReport(dailyAverages, week, startDate);
    weeklyReports.push({
      week,
      ...report
    });
  }

  return NextResponse.json(weeklyReports);
}

function groupByDate(prices: FuelPrice[]) {
  const grouped = new Map();
  
  prices.forEach(price => {
    if (!grouped.has(price.Period)) {
      grouped.set(price.Period, []);
    }
    grouped.get(price.Period).push(price);
  });
  
  return grouped;
}

function calculateDailyAverages(groupedData: Map<string, FuelPrice[]>) {
  const dailyAverages = new Map();
  
  for (const [date, prices] of groupedData) {
    const averages = {
      PMS: average(prices.map(p => p.PMS)),
      AGO: average(prices.map(p => p.AGO)),
      DPK: average(prices.map(p => p.DPK)),
      LPG: average(prices.map(p => p.LPG)),
      date: date
    };
    dailyAverages.set(date, averages);
  }
  
  return dailyAverages;
}

function getWeekData(dailyAverages: Map<string, DailyAverage>, weekNumber: number, startDate: Date) {
  const weekStart = new Date(startDate);
  weekStart.setDate(weekStart.getDate() + (weekNumber - 1) * 7);
  const weekEnd = new Date(weekStart);
  weekEnd.setDate(weekEnd.getDate() + 6);

  const weekData = {
    dates: [] as string[],
    PMS: [] as number[],
    AGO: [] as number[],
    DPK: [] as number[],
    LPG: [] as number[]
  };

  const currentDate = new Date(weekStart);
  while (currentDate <= weekEnd) {
    const dateStr = currentDate.toISOString().split('T')[0];
    weekData.dates.push(dateStr);

    const dayData = dailyAverages.get(dateStr);
    if (dayData) {
      weekData.PMS.push(dayData.PMS);
      weekData.AGO.push(dayData.AGO);
      weekData.DPK.push(dayData.DPK);
      weekData.LPG.push(dayData.LPG);
    } else {
      // Use previous day's data or default to maintaining last known value
      const prevValues = {
        PMS: weekData.PMS[weekData.PMS.length - 1] || 0,
        AGO: weekData.AGO[weekData.AGO.length - 1] || 0,
        DPK: weekData.DPK[weekData.DPK.length - 1] || 0,
        LPG: weekData.LPG[weekData.LPG.length - 1] || 0
      };
      weekData.PMS.push(prevValues.PMS);
      weekData.AGO.push(prevValues.AGO);
      weekData.DPK.push(prevValues.DPK);
      weekData.LPG.push(prevValues.LPG);
    }

    currentDate.setDate(currentDate.getDate() + 1);
  }

  return weekData;
}

interface DailyAverage {
  PMS: number;
  AGO: number;
  DPK: number;
  LPG: number;
  date: string;
}

function generateWeeklyReport(dailyAverages: Map<string, DailyAverage>, weekNumber: number, startDate: Date): WeeklyProductReport {
  const currentWeekData = getWeekData(dailyAverages, weekNumber, startDate);
  const previousWeekData = getWeekData(dailyAverages, weekNumber - 1, startDate);
  
  return {
    PMS: calculateProductMetrics(weekNumber, currentWeekData.PMS, previousWeekData.PMS),
    AGO: calculateProductMetrics(weekNumber, currentWeekData.AGO, previousWeekData.AGO),
    DPK: calculateProductMetrics(weekNumber, currentWeekData.DPK, previousWeekData.DPK),
    LPG: calculateProductMetrics(weekNumber, currentWeekData.LPG, previousWeekData.LPG),
  };
}

function calculateProductMetrics(week: number, currentData: number[], previousData: number[]): WeeklyReport {
  const currentPrice = average(currentData);
  const previousPrice = average(previousData);
  const difference = currentPrice - previousPrice;
  
  return {
    week,
    currentPrice: Math.round(currentPrice * 100) / 100,
    performance: {
      value: Math.round(difference * 100) / 100,
      percentage: Math.round((difference / previousPrice) * 10000) / 100
    },
    chartData: currentData
  };
}

function average(numbers: number[]): number {
  return numbers.reduce((a, b) => a + b, 0) / numbers.length;
}