import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const PRODUCT_DATA = [
  {
    code: "PMS",
    name: "Premium Motor Spirit",
    price: "N714.26",
    change: "+0.37",
    percentChange: "+0.09",
    trend: "up",
  },
  {
    code: "AGO",
    name: "Automotive Gas Oil",
    price: "N1249.06",
    change: "-9.01",
    percentChange: "-0.34",
    trend: "down",
  },
  {
    code: "ICE",
    name: "ICE Brent Crude",
    price: "$75.00",
    change: "0.68",
    percentChange: "+0.90",
    trend: "up",
  },
  {
    code: "DPK",
    name: "Dual Purpose Kerosene",
    price: "N1088.92",
    change: "-50.90",
    percentChange: "-0.92",
    trend: "down",
  },
  {
    code: "LPG",
    name: "Liquified Petroleum Gas",
    price: "N1087.66",
    change: "-36.10",
    percentChange: "-0.67",
    trend: "down",
  },
];

export default function ProductPrices() {
  return (
    <Card className="bg-[#171717] border-zinc-800 rounded-[8px] h-[320px]">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-medium text-zinc-200">
          Current product retail prices
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-0">
        {PRODUCT_DATA.map((product, index) => (
          <div key={product.code}>
            <div className="flex items-center justify-between py-3">
              <div className="space-x-2 flex items-center">
                <p className="text-xs font-medium leading-none text-zinc-200">
                  {product.code}
                </p>
                <p className="text-xs text-zinc-500 font-medium">
                  {product.name}
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-xs font-medium text-zinc-200">
                  {product.price}
                </span>
                <div className={`flex items-center space-x-1 text-xs`}>
                  <span
                    className={` ${
                      product.trend === "up" ? "text-[#12B76A]" : "text-[#F04438]"
                    }`}
                  >
                    {product.change}
                  </span>
                  <Badge
                    variant="default"
                    className={`${
                      product.trend === "up"
                        ? "bg-[#054F31] text-[#32D583]"
                        : "bg-[#F04438] text-[#FDA29B]"
                    }`}
                  >
                    {product.percentChange}
                  </Badge>
                </div>
              </div>
            </div>
            {index < PRODUCT_DATA.length - 1 && (
              <Separator className="bg-zinc-800" />
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
