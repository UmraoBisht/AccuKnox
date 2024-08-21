
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { ChartTooltipContent, ChartTooltip, ChartContainer } from "@/components/ui/chart"
import { Pie, PieChart, CartesianGrid, XAxis, Bar, BarChart, Line, LineChart } from "recharts"

export default function Component() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-100">
      <header className="flex items-center justify-between h-16 px-4 border-b bg-white">
        <div className="flex items-center space-x-4">
          <nav className="flex items-center space-x-4">
            <Link href="#" className="text-sm font-medium text-gray-700" prefetch={false}>
              Home
            </Link>
            <span className="text-sm font-medium text-gray-500">/</span>
            <Link href="#" className="text-sm font-medium text-gray-700" prefetch={false}>
              Dashboard V2
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative flex-1">
            <div className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-lg bg-gray-100 pl-8 pr-4 py-2 text-sm"
            />
          </div>
          <Button variant="outline" className="text-sm">
            Add Widget
          </Button>
          <Button variant="outline" className="text-sm">
            Last 2 days
          </Button>
        </div>
      </header>
      <main className="flex flex-col flex-1 p-4 space-y-4 overflow-auto">
        <section className="space-y-4">
          <h2 className="text-xl font-bold">CNAPP Dashboard</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <Card className="p-4">
              <CardHeader>
                <CardTitle className="text-base">Cloud Accounts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <PiechartcustomChart className="w-full aspect-[4/3]" />
                  <div className="flex items-center justify-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-blue-500 rounded-full" />
                      <span>Connected (2)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-blue-200 rounded-full" />
                      <span>Not Connected (2)</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="p-4">
              <CardHeader>
                <CardTitle className="text-base">Cloud Account Risk Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <PiechartcustomChart className="w-full aspect-[4/3]" />
                <ul className="space-y-1">
                  <li className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-red-500 rounded-full" />
                    <span>Failed (1689)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-yellow-500 rounded-full" />
                    <span>Warning (681)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-gray-500 rounded-full" />
                    <span>Not available (36)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-green-500 rounded-full" />
                    <span>Passed (7253)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="p-4 flex flex-col items-center justify-center">
              <Button variant="outline" className="text-sm">
                Add Widget
              </Button>
            </Card>
          </div>
        </section>
        <section className="space-y-4">
          <h2 className="text-xl font-bold">CWPP Dashboard</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <Card className="p-4">
              <CardHeader>
                <CardTitle className="text-sm">Top 5 Namespace Specific Alerts</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center">
                <BarChartIcon className="w-16 h-16 text-gray-300" />
                <p className="text-gray-500">No Graph data available!</p>
              </CardContent>
            </Card>
            <Card className="p-4">
              <CardHeader>
                <CardTitle className="text-base">Workload Alerts</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center">
                <BarChartIcon className="w-16 h-16 text-gray-300" />
                <p className="text-gray-500">No Graph data available!</p>
              </CardContent>
            </Card>
            <Card className="p-4 flex flex-col items-center justify-center">
              <Button variant="outline" className="text-sm">
                Add Widget
              </Button>
            </Card>
          </div>
        </section>
        <section className="space-y-4">
          <h2 className="text-xl font-bold">Registry Scan</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <Card className="p-4">
              <CardHeader>
                <CardTitle className="text-base">Image Risk Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold">1470 Total Vulnerabilities</div>
                <BarchartChart className="w-full aspect-[4/3]" />
              </CardContent>
            </Card>
            <Card className="p-4">
              <CardHeader>
                <CardTitle className="text-sm">Image Security Issues</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2 Total Images</div>
                <BarchartChart className="w-full aspect-[4/3]" />
              </CardContent>
            </Card>
            <Card className="p-4 flex flex-col items-center justify-center">
              <Button variant="outline" className="text-sm">
                Add Widget
              </Button>
            </Card>
          </div>
        </section>
      </main>
    </div>
  )
}

function BarChartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  )
}


function BarchartChart(props) {
  return (
    <div {...props}>
      <ChartContainer
        config={{
          desktop: {
            label: "Desktop",
            color: "hsl(var(--chart-1))",
          },
        }}
        className="min-h-[300px]"
      >
        <BarChart
          accessibilityLayer
          data={[
            { month: "January", desktop: 186 },
            { month: "February", desktop: 305 },
            { month: "March", desktop: 237 },
            { month: "April", desktop: 73 },
            { month: "May", desktop: 209 },
            { month: "June", desktop: 214 },
          ]}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
        </BarChart>
      </ChartContainer>
    </div>
  )
}


function LinechartChart(props) {
  return (
    <div {...props}>
      <ChartContainer
        config={{
          desktop: {
            label: "Desktop",
            color: "hsl(var(--chart-1))",
          },
        }}
      >
        <LineChart
          accessibilityLayer
          data={[
            { month: "January", desktop: 186 },
            { month: "February", desktop: 305 },
            { month: "March", desktop: 237 },
            { month: "April", desktop: 73 },
            { month: "May", desktop: 209 },
            { month: "June", desktop: 214 },
          ]}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
          <Line dataKey="desktop" type="natural" stroke="var(--color-desktop)" strokeWidth={2} dot={false} />
        </LineChart>
      </ChartContainer>
    </div>
  )
}


function PiechartcustomChart(props) {
  return (
    <div {...props}>
      <ChartContainer
        config={{
          visitors: {
            label: "Visitors",
          },
          chrome: {
            label: "Chrome",
            color: "hsl(var(--chart-1))",
          },
          safari: {
            label: "Safari",
            color: "hsl(var(--chart-2))",
          },
          firefox: {
            label: "Firefox",
            color: "hsl(var(--chart-3))",
          },
          edge: {
            label: "Edge",
            color: "hsl(var(--chart-4))",
          },
          other: {
            label: "Other",
            color: "hsl(var(--chart-5))",
          },
        }}
      >
        <PieChart>
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
          <Pie
            data={[
              { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
              { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
              { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
              { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
              { browser: "other", visitors: 90, fill: "var(--color-other)" },
            ]}
            dataKey="visitors"
            nameKey="browser"
          />
        </PieChart>
      </ChartContainer>
    </div>
  )
}