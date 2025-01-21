import React from "react";

export default function RetailTabContent() {
  return (
    <div className="grid gap-4">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">
          Retail Price Analysis
        </h2>
        <p className="text-muted-foreground">
          Analyze retail fuel prices across different locations and time
          periods.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        Retail price specific components
      </div>
    </div>
  );
}
