import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

import { useSelector } from "react-redux";
import { selectFilteredWidgets } from "../../features/dashboard/dashboardSlice";
import { WidgetRenderer } from "./WidgetRenderer";
import { Card } from "../ui/card";

function ExecutiveDashBoard({ setCategoryTitle, setShowAddWidget }) {
  const dashboard = useSelector(selectFilteredWidgets);
  const executiveDashboardCategory = dashboard.find(
    (category) => category.categoryTitle === "CSPM Executive Dashboard"
  );

  const handleModal = () => {
    setShowAddWidget(true);
    setCategoryTitle("CSPM Executive Dashboard");
  };

  return (
    <section className="space-y-4">
      <h3 className="text-lg font-bold">CSPM Executive Dashboard</h3>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
        {executiveDashboardCategory.widgets.length === 0 ? (
          <p className="text-sm">No widgets available.</p>
        ) : (
          executiveDashboardCategory.widgets.map((widget,index) => (
            <WidgetRenderer key={index} widget={widget} />
          ))
        )}
        <Card className="p-4 flex flex-col items-center justify-center">
          <Button variant="outline" className="text-sm" onClick={handleModal}>
            <Plus /> Add Widget
          </Button>
        </Card>
      </div>
    </section>
  );
}

export default ExecutiveDashBoard;
