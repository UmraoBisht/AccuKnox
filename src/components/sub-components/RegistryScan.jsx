import React from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Card } from "../ui/card";
import { useSelector } from "react-redux";
import { selectFilteredWidgets } from "@/features/dashboard/dashboardSlice";
import { WidgetRenderer } from "./WidgetRenderer";

function RegistryScan({ setCategoryTitle, setShowAddWidget }) {
  const dashboard = useSelector(selectFilteredWidgets);
  const registryScanCategory = dashboard.find(
    (category) => category.categoryTitle === "Registry Scan"
  );

  const handleModal = () => {
    setShowAddWidget(true);
    setCategoryTitle("Registry Scan");
  };
  return (
    <section className="space-y-4">
      <h3 className="text-lg font-bold">Registry scan</h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {registryScanCategory.widgets.length === 0 ? (
          <p className="text-sm">No widgets available.</p>
        ) : (
          registryScanCategory.widgets.map((widget,index) => (
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

export default RegistryScan;
