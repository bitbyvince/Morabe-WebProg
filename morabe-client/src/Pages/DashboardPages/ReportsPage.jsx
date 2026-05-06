import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { PieChart } from "@mui/x-charts/PieChart";

function ReportsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
          Reports & Analytics
        </h1>
        <p className="mt-2 text-base leading-6 text-zinc-600">
          Detailed analysis and data visualization of your system metrics.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-lg border border-zinc-200 bg-white p-6">
          <div className="text-sm font-medium text-zinc-600">Total Revenue</div>
          <div className="mt-2 text-3xl font-bold text-zinc-900">$45,231</div>
        </div>
        <div className="rounded-lg border border-zinc-200 bg-white p-6">
          <div className="text-sm font-medium text-zinc-600">Growth Rate</div>
          <div className="mt-2 text-3xl font-bold text-zinc-900">+23.5%</div>
        </div>
      </div>

      {/* Charts Section */}
      <h2 className="text-lg font-semibold text-zinc-900">Quarterly Performance</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-lg border border-zinc-200 bg-white p-6">
          <BarChart
            series={[
              { data: [35, 44, 24, 34], label: "Series 1" },
              { data: [51, 6, 49, 30], label: "Series 2" },
            ]}
            height={300}
            xAxis={[
              {
                data: ["Q1", "Q2", "Q3", "Q4"],
                scaleType: "band",
              },
            ]}
            margin={{ top: 10, bottom: 30, left: 60, right: 10 }}
          />
        </div>
        <div className="rounded-lg border border-zinc-200 bg-white p-6">
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: 10, label: "Product A" },
                  { id: 1, value: 15, label: "Product B" },
                  { id: 2, value: 20, label: "Product C" },
                ],
              },
            ]}
            width={400}
            height={300}
          />
        </div>
      </div>

      {/* Monthly Performance Chart */}
      <div className="rounded-lg border border-zinc-200 bg-white p-6">
        <h3 className="mb-6 text-base font-semibold text-zinc-900">Monthly Performance</h3>
        <BarChart
          series={[
            { data: [30, 45, 55, 40, 60, 55], label: "Revenue" },
          ]}
          height={300}
          xAxis={[
            {
              data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
              scaleType: "band",
            },
          ]}
          margin={{ top: 10, bottom: 30, left: 60, right: 10 }}
        />
      </div>
    </div>
  );
}

export default ReportsPage;