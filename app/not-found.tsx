"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChartNoAxesColumn } from "lucide-react";

export default function NotFound() {
  const redirectPath = "/analysis";

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 py-12">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-gray-800 dark:text-gray-100 tracking-widest">
          404
        </h1>
        <div className="mt-4 space-y-2">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
            Oops! Page not found
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
            We couldn&lsquo;t find what you&lsquo;re looking for. The page might
            have been moved, deleted, or possibly never existed.
          </p>
        </div>
        <div className="mt-8 mb-8 border-t border-gray-200 dark:border-gray-700 max-w-xs mx-auto" />
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href={redirectPath}>
            <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium">
              <ChartNoAxesColumn className="mr-2 h-4 w-4" />
              Back to Analysis
            </Button>
          </Link>
        </div>
        <div className="mt-8 text-sm text-gray-500 dark:text-gray-400">
          <p>Looking for something specific?</p>
          <div className="mt-2 space-x-4">
            <Link href="/#" className="text-blue-600 hover:underline">
              Help Center
            </Link>
            <span>•</span>
            <Link href="/#" className="text-blue-600 hover:underline">
              Contact Support
            </Link>
            <span>•</span>
            <Link href="/#" className="text-blue-600 hover:underline">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
