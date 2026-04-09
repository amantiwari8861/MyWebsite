import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import { Users, TrendingUp, DollarSign, Activity } from "lucide-react";

const data = [
  { name: "Jan", users: 400, revenue: 2400 },
  { name: "Feb", users: 300, revenue: 1398 },
  { name: "Mar", users: 500, revenue: 3800 },
  { name: "Apr", users: 700, revenue: 4300 },
  { name: "May", users: 600, revenue: 3200 },
];

const stats = [
  { title: "Total Users", value: "12,450", icon: <Users />, change: "+12%" },
  { title: "Revenue", value: "$34,200", icon: <DollarSign />, change: "+8%" },
  { title: "Growth", value: "18%", icon: <TrendingUp />, change: "+5%" },
  { title: "Active Sessions", value: "1,245", icon: <Activity />, change: "+10%" },
];

export default function DataAnalyticsDashboard() {
  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Data Analytics Dashboard</h1>
        <p className="text-gray-500">Overview of your business performance</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="rounded-2xl shadow-md">
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">{stat.title}</p>
                <h2 className="text-xl font-semibold">{stat.value}</h2>
                <p className="text-green-500 text-sm">{stat.change}</p>
              </div>
              <div className="text-blue-500">{stat.icon}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bar Chart */}
        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold mb-4">User Growth</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="users" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Line Chart */}
        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold mb-4">Revenue Trend</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="revenue" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Table Section */}
      <Card className="rounded-2xl shadow-md">
        <CardContent className="p-4">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="p-2">Date</th>
                <th className="p-2">User</th>
                <th className="p-2">Action</th>
                <th className="p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2">01 Apr</td>
                <td className="p-2">John Doe</td>
                <td className="p-2">Login</td>
                <td className="p-2 text-green-500">Success</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">02 Apr</td>
                <td className="p-2">Jane Smith</td>
                <td className="p-2">Purchase</td>
                <td className="p-2 text-green-500">Completed</td>
              </tr>
              <tr>
                <td className="p-2">03 Apr</td>
                <td className="p-2">Alex</td>
                <td className="p-2">Logout</td>
                <td className="p-2 text-yellow-500">Pending</td>
              </tr>
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
