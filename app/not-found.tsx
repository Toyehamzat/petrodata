"use client"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LucideAlertTriangle } from "lucide-react";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();

  // Determine the redirect path
  const redirectPath = pathname === "/dashboard" ? "/analysis" : "/";

  return (
    <div className="flex flex-col items-center justify-center h-[80vh]">
      <div className="flex items-center space-x-4">
        <LucideAlertTriangle className="w-12 h-12 text-red-600" />
        <div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
            404
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Page not found
          </p>
        </div>
      </div>
      <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link href={redirectPath}>
        <Button className="mt-6 bg-blue-600 text-white hover:bg-blue-700">
          {pathname === "/dashboard" ? "Go to Analysis" : "Go back home"}
        </Button>
      </Link>
    </div>
  );
};
