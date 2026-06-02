import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { PieChart } from "@mui/x-charts/PieChart";

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 14 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

function DashboardPage() {
  const avgAge = (
    rows.reduce((sum, row) => sum + (row.age || 0), 0) /
    rows.filter((row) => row.age !== null).length
  ).toFixed(1);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
          Dashboard Overview
        </h1>
        <p className="mt-2 text-base leading-6 text-zinc-600">
          Monitor your system performance and key metrics.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-lg border border-zinc-200 bg-white p-6">
          <div className="text-sm font-medium text-zinc-600">Total Users</div>
          <div className="mt-2 text-3xl font-bold text-zinc-900">
            {rows.length}
          </div>
        </div>
        <div className="rounded-lg border border-zinc-200 bg-white p-6">
          <div className="text-sm font-medium text-zinc-600">Average Age</div>
          <div className="mt-2 text-3xl font-bold text-zinc-900">{avgAge}</div>
        </div>
      </div>

      {/* Charts Section */}
      <h2 className="text-lg font-semibold text-zinc-900">System Analytics</h2>
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
                  { id: 0, value: 10, label: "Series A" },
                  { id: 1, value: 15, label: "Series B" },
                  { id: 2, value: 20, label: "Series C" },
                ],
              },
            ]}
            width={400}
            height={300}
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="rounded-lg border border-zinc-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-zinc-900">System Status</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <div>
            <div className="text-2xl font-bold text-zinc-900">98.5%</div>
            <p className="text-xs text-zinc-600">System Uptime</p>
          </div>
          <div>
            <div className="text-2xl font-bold text-zinc-900">45ms</div>
            <p className="text-xs text-zinc-600">Avg Response Time</p>
          </div>
          <div>
            <div className="text-2xl font-bold text-zinc-900">2.3GB</div>
            <p className="text-xs text-zinc-600">Memory Usage</p>
          </div>
        </div>
      </div>

      {/* Location Map */}
      <div className="rounded-lg border border-zinc-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-zinc-900">Location</h2>
        <p className="mt-2 text-sm text-zinc-600">National University Manila</p>
        <div className="mt-4 overflow-hidden rounded-xl border border-zinc-200">
          <iframe
            title="National University Manila Location"
            src="https://www.openstreetmap.org/export/embed.html?bbox=120.9910%2C14.6000%2C121.0025%2C14.6085&layer=mapnik&marker=14.604167%2C120.994167"
            className="h-80 w-full border-0"
            loading="lazy"
            aria-label="Map showing National University Manila location"
          />
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
