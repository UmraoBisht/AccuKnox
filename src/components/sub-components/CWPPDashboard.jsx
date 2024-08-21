import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useSelector } from "react-redux";
import { WidgetRenderer } from "./WidgetRenderer";
import { selectFilteredWidgets } from "@/features/dashboard/dashboardSlice";
function CWPPDashboard({setCategoryTitle,setShowAddWidget}) {
  const dashboard = useSelector(selectFilteredWidgets);
  const cwppDashboardCategory = dashboard.find(
    (category) => category.categoryTitle === "CWPP Dashboard"
  );

  const handleModal = () => {
    setShowAddWidget(true);
    setCategoryTitle("CWPP Dashboard");
  };
  return ( 
    <section className="space-y-4">
      <h3 className="text-lg font-bold">CWPP Dashboard</h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      {cwppDashboardCategory.widgets.length === 0 ? (
          <p className="text-sm">No widgets available.</p>
        ) : (
          cwppDashboardCategory.widgets.map((widget,index) => (
            <WidgetRenderer key={index} widget={widget} />
          ))
        )}

        <Card className="p-2 flex flex-col items-center justify-center">
          <Button variant="outline" className="text-sm" onClick={handleModal}>
            <Plus /> Add Widget
          </Button>
        </Card>
      </div>
    </section>
  );
}

export default CWPPDashboard;
