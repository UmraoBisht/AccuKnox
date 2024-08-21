import { Cell, Label, Pie, PieChart } from "recharts";
import { ChartNoAxesCombined } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function renderPieChart(data) {
  const pieData = [
    { label: "Connected", value: data.connected, color: "#4A90E2" },
    {
      label: "Not Connected",
      value: data.notConnected,
      color: "#50E3C2",
    },
  ];

  return (
    <PieChart width={200} height={200}>
      <Pie
        data={pieData}
        dataKey="value"
        nameKey="label"
        innerRadius={60}
        outerRadius={80}
        strokeWidth={5}
        paddingAngle={5}
      >
        {pieData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
        <Label
          content={({ viewBox }) => {
            if (viewBox && "cx" in viewBox && "cy" in viewBox) {
              return (
                <text
                  x={viewBox.cx}
                  y={viewBox.cy}
                  textAnchor="middle"
                  dominantBaseline="middle"
                >
                  <tspan
                    x={viewBox.cx}
                    y={viewBox.cy}
                    className="fill-foreground text-3xl font-bold"
                  >
                    {data.total.toLocaleString()}
                  </tspan>
                  <tspan
                    x={viewBox.cx}
                    y={(viewBox.cy || 0) + 24}
                    className="fill-muted-foreground"
                  >
                    Total
                  </tspan>
                </text>
              );
            }
          }}
        />
      </Pie>
    </PieChart>
  );
}

function renderDonutChart(data) {
  const donutData = [
    { label: "Failed", value: 1699, color: "#FF6F61" },
    { label: "Warning", value: 581, color: "#FFA500" },
    { label: "Not Available", value: 54, color: "#808080" },
    { label: "Passed", value: 7325, color: "#4CAF50" },
  ];

  return (
    <PieChart width={200} height={200}>
      <Pie
        data={donutData}
        dataKey="value"
        nameKey="label"
        innerRadius={60}
        outerRadius={80}
        strokeWidth={5}
        paddingAngle={5}
      >
        {donutData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
        <Label
          content={({ viewBox }) => {
            if (viewBox && "cx" in viewBox && "cy" in viewBox) {
              return (
                <text
                  x={viewBox.cx}
                  y={viewBox.cy}
                  textAnchor="middle"
                  dominantBaseline="middle"
                >
                  <tspan
                    x={viewBox.cx}
                    y={viewBox.cy}
                    className="fill-foreground text-3xl font-bold"
                  >
                    {data.total.toLocaleString()}
                  </tspan>
                  <tspan
                    x={viewBox.cx}
                    y={(viewBox.cy || 0) + 24}
                    className="fill-muted-foreground"
                  >
                    Total
                  </tspan>
                </text>
              );
            }
          }}
        />
      </Pie>
    </PieChart>
  );
}

function renderRegistryScan(data) {
  const singleStackedData = [
    { label: "Critical", value: data.critical, color: "#D32F2F" },
    { label: "High", value: data.high, color: "#F57C00" },
    { label: "Medium", value: data.medium, color: "#FFB300" },
    { label: "Low", value: data.low, color: "#FFEB3B" },
  ];
  const totalValue = singleStackedData.reduce(
    (acc, item) => acc + item.value,
    0
  );
  return (
    <div className="my-4">
      <div className="flex h-6 w-full rounded-full overflow-hidden bg-gray-200">
        {singleStackedData.map((item) => (
          <div
            key={item.label}
            style={{
              width: `${(item.value / totalValue) * 100}%`,
              backgroundColor: item.color,
            }}
            className="h-full"
          />
        ))}
      </div>
    </div>
  );
}

export function WidgetRenderer({ widget }) {
  const renderLegend = (data, widgetType) => {
    let legendData = [];

    switch (widgetType) {
      case "PieChart":
        legendData = [
          { label: "Connected", value: data.connected, color: "#4A90E2" },
          {
            label: "Not Connected",
            value: data.notConnected,
            color: "#50E3C2",
          },
        ];
        break;
      case "DonutChart":
        legendData = [
          { label: "Failed", value: data.failed, color: "#FF6F61" },
          { label: "Warning", value: data.warning, color: "#FFA500" },
          {
            label: "Not Available",
            value: data.notAvailable,
            color: "#808080",
          },
          { label: "Passed", value: data.passed, color: "#4CAF50" },
        ];
        break;
      case "SingleStackedChart":
        legendData = [
          { label: "Critical", value: data.critical, color: "#D32F2F" },
          { label: "High", value: data.high, color: "#F57C00" },
          { label: "Medium", value: data.medium, color: "#FFB300" },
          { label: "Low", value: data.low, color: "#FFEB3B" },
        ];
        break;
      default:
        legendData = [];
    }

    return legendData.map((item, index) => (
      <div key={index} className="flex items-center space-x-2">
        <div
          className="w-4 h-4 rounded-full"
          style={{ backgroundColor: item.color }}
        />
        <span>
          {item.label} ({item.value})
        </span>
      </div>
    ));
  };

  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle className="text-base font-semibold">
          {widget.widgetTitle}
        </CardTitle>
        <CardDescription>
          {widget.widgetTitle === "Image Risk Assessment" && (
            <p>
              <b>{widget.data.totalVulnerabilities}</b> Total Vulnerabilities
            </p>
          )}
          {widget.widgetTitle === "Image Security Issues" && (
            <p>
              <b>{widget.data.totalImages}</b> Total Images
            </p>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        {Object.keys(widget?.data).length === 0 ? (
          <div className="flex items-center flex-col justify-center space-x-4 h-full">
            <ChartNoAxesCombined />
            <span>No Data Graph Available</span>
          </div>
        ) : (
          <>
            {widget.widgetType === "PieChart" && renderPieChart(widget.data)}
            {widget.widgetType === "DonutChart" &&
              renderDonutChart(widget.data)}
            {widget.widgetType === "SingleStackedChart" &&
              renderRegistryScan(widget.data)}
          </>
        )}
      </CardContent>
      {widget && (
        <CardFooter className="flex-col gap-2 text-sm">
          <div className="flex items-center justify-center space-x-4">
            <div className="flex items-center space-x-2">
              {renderLegend(widget.data, widget.widgetType)}
            </div>
          </div>
        </CardFooter>
      )}
    </Card>
  );
}
