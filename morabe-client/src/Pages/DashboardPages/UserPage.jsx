import React from "react";

const users = [
  { id: 1, lastName: "Vince", firstName: "Morabe", age: 14 },
  { id: 2, lastName: "Harvey", firstName: "Bulatao", age: 31 },
  { id: 3, lastName: "Paul", firstName: "Cruz", age: 31 },
  { id: 4, lastName: "Caila", firstName: "Joy", age: 11 },
  { id: 5, lastName: "Jhay", firstName: "Ann", age: 23 },
  { id: 6, lastName: "Diether", firstName: "Baculps", age: 15 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

function UserPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
          Users Management
        </h1>
        <p className="mt-2 text-base leading-6 text-zinc-600">
          View and manage all registered users in the system.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-lg border border-zinc-200 bg-white p-6">
          <div className="text-sm font-medium text-zinc-600">Total Users</div>
          <div className="mt-2 text-3xl font-bold text-zinc-900">
            {users.length}
          </div>
        </div>
        <div className="rounded-lg border border-zinc-200 bg-white p-6">
          <div className="text-sm font-medium text-zinc-600">Active Users</div>
          <div className="mt-2 text-3xl font-bold text-zinc-900">
            {users.length - 2}
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="rounded-lg border border-zinc-200 bg-white">
        <div className="px-6 py-4 border-b border-zinc-200">
          <h2 className="text-lg font-semibold text-zinc-900">User Overview</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-zinc-200 bg-zinc-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-zinc-600 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-zinc-600 uppercase tracking-wider">
                  First Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-zinc-600 uppercase tracking-wider">
                  Last Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-zinc-600 uppercase tracking-wider">
                  Age
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-zinc-600 uppercase tracking-wider">
                  Full Name
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="border-b border-zinc-200 hover:bg-zinc-50"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-900">
                    {user.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-900">
                    {user.firstName || "-"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-900">
                    {user.lastName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-900">
                    {user.age || "-"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-900">
                    {user.firstName || ""} {user.lastName}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Location Info */}
      <div className="rounded-lg border border-zinc-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-zinc-900">
          Location Information
        </h2>
        <div className="mt-4 space-y-2 text-sm text-zinc-600">
          <p>
            <span className="font-medium text-zinc-900">Primary Location:</span>{" "}
            National University-Manila
          </p>
          <p>
            <span className="font-medium text-zinc-900">Address:</span> 551 F
            Jhocson St, Sampaloc, Manila, 1008 Metro Manila
          </p>
          <p>
            <span className="font-medium text-zinc-900">Coordinates:</span>{" "}
            14.604253, 120.994314
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserPage;
