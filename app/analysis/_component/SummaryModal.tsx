import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ExternalLink } from "lucide-react";

export default function SummaryModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const items = Array(6).fill({
    title: "Petrochem daily wire",
    date: "August 9, 2024",
    description:
      "Nigeria consumes approximately 40-50 million liters of PMS per day. Demand is driven by Transportation (70-80%): cars, buses, trucks, motorcycles...",
    link: "#",
  });

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[640px] h-[640px] bg-[#171717]">
        <DialogHeader>
          <DialogTitle className="text-base">Daily summary</DialogTitle>
          <DialogDescription className="text-sm text-[#A3A3A3]">
            Here&apos;s a quick summary of the PMS (Premium Motor Spirit -
            Petrol) market in Nigeria, breaking down demand, supply, and
            regional trends:
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 px-4 mt-4 h-[500px] overflow-y-auto">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-medium">{item.title}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-[#A3A3A3]">{item.date}</span>
                  <a href={item.link} className="text-[#A3A3A3] hover:text-white">
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
              <p className="text-sm text-[#A3A3A3]">{item.description}</p>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
