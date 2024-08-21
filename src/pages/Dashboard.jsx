import CWPPDashboard from "@/components/sub-components/CWPPDashboard";
import ExecutiveDashBoard from "@/components/sub-components/ExecutiveDashBoard";
import RegistryScan from "@/components/sub-components/RegistryScan";
import { Button } from "@/components/ui/button";
import { Clock, EllipsisVertical, Plus, RefreshCcw } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/sub-components/Navbar";
import { AddWidget } from "@/components/sub-components/AddWidget";
import { useState } from "react";
import {
  addWidget,
  availableWidgets,
  removeWidget,
} from "@/features/dashboard/dashboardSlice";
import { useDispatch, useSelector } from "react-redux";

function Dashboard() {
  const [showAddWidget, setShowAddWidget] = useState(false);
  const [categoryTitle, setCategoryTitle] = useState("");
  const { dashboard } = useSelector((state) => state.dashboard);

  const cwppDashboardCategory = availableWidgets.find(
    (category) => category.categoryTitle === "CWPP Dashboard"
  );
  const executiveDashboardCategory = availableWidgets.find(
    (category) => category.categoryTitle === "CSPM Executive Dashboard"
  );
  const registryScanCategory = availableWidgets.find(
    (category) => category.categoryTitle === "Registry Scan"
  );

  const dispatch = useDispatch();
  const handleCheckboxChange = (event, categoryTitle, widgetName) => {
    if (event.target.checked) {
      dispatch(addWidget({ categoryTitle, widget: widgetName }));
    } else {
      dispatch(removeWidget({ categoryTitle, widget: widgetName }));
    }
  };

  const isChecked = (categoryTitle, widgetName) => {
    const category = dashboard.find(
      (cat) => cat.categoryTitle === categoryTitle
    );
    return category ? category.widgets.includes(widgetName) : false;
  };

  return (
    <>
      <Navbar />
      <main className="flex flex-col flex-1 p-4 space-y-4 overflow-auto">
        <div className="flex items-center justify-between space-x-4">
          <h2 className="text-xl font-bold">CNAPP Dashboard</h2>
          <div className="flex items-center justify-end gap-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="text-xs">
                  Add Widget to Dashboard <Plus className="w-4 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Add Widget</SheetTitle>
                  <SheetDescription className="mt-4">
                    Add a new widget to the dashboard.
                  </SheetDescription>
                  <div className="flex flex-col justify-between h-[80vh] space-x-2">
                    <Tabs defaultValue="cspm" className="w-full">
                      <TabsList>
                        <TabsTrigger value="cspm">CSPM</TabsTrigger>
                        <TabsTrigger value="cwpp">CWPP</TabsTrigger>
                        <TabsTrigger value="image">Image</TabsTrigger>
                      </TabsList>
                      <TabsContent value="cspm" className="mt-6">
                        {executiveDashboardCategory.widgets.map(
                          (widget, index) => {
                            return (
                              <div
                                key={index}
                                className="widget-item flex items-center mb-2"
                              >
                                <input
                                  type="checkbox"
                                  id={`widget-${index}`}
                                  checked={isChecked(
                                    executiveDashboardCategory.categoryTitle,
                                    widget
                                  )}
                                  onChange={(e) =>
                                    handleCheckboxChange(
                                      e,
                                      "CSPM Executive Dashboard",
                                      widget
                                    )
                                  }
                                  className="mr-2"
                                />
                                <label
                                  htmlFor={`widget-${index}`}
                                  className="cursor-pointer"
                                >
                                  {widget.widgetTitle}
                                </label>
                              </div>
                            );
                          }
                        )}
                      </TabsContent>
                      <TabsContent value="cwpp" className="mt-6">
                        {cwppDashboardCategory.widgets.map((widget, index) => {
                          return (
                            <div
                              key={index}
                              className="widget-item flex items-center mb-2"
                            >
                              <input
                                type="checkbox"
                                id={`widget-${index}`}
                                checked={dashboard[1].widgets.includes(widget)}
                                onChange={(e) =>
                                  handleCheckboxChange(
                                    e,
                                    "CWPP Dashboard",
                                    widget
                                  )
                                }
                                className="mr-2"
                              />
                              <label
                                htmlFor={`widget-${index}`}
                                className="cursor-pointer"
                              >
                                {widget.widgetTitle}
                              </label>
                            </div>
                          );
                        })}
                      </TabsContent>
                      <TabsContent value="image" className="mt-6">
                        {registryScanCategory.widgets.map((widget, index) => {
                          return (
                            <div
                              key={index}
                              className="widget-item flex items-center mb-2"
                            >
                              <input
                                type="checkbox"
                                id={`widget-${index}`}
                                checked={dashboard[2].widgets.includes(widget)}
                                onChange={(e) =>
                                  handleCheckboxChange(
                                    e,
                                    "Registry Scan",
                                    widget
                                  )
                                }
                                className="mr-2"
                              />
                              <label
                                htmlFor={`widget-${index}`}
                                className="cursor-pointer"
                              >
                                {widget.widgetTitle}
                              </label>
                            </div>
                          );
                        })}
                      </TabsContent>
                    </Tabs>
                  </div>
                </SheetHeader>
              </SheetContent>
            </Sheet>

            <Button variant="outline" className="text-xs">
              <RefreshCcw className="w-4 h-5" />
            </Button>
            <Button variant="outline" className="text-xs">
              <EllipsisVertical className="w-4 h-5" />
            </Button>
            <Button
              variant="outline"
              className="text-xs flex gap-2 items-center border-2 border-blue-800"
            >
              <Clock />
              <div className="h-[98%] w-[2px] bg-blue-800"></div>
              <span>Last 2 days</span>
            </Button>
          </div>
        </div>
        <ExecutiveDashBoard
          setShowAddWidget={setShowAddWidget}
          setCategoryTitle={setCategoryTitle}
        />
        <CWPPDashboard
          setShowAddWidget={setShowAddWidget}
          setCategoryTitle={setCategoryTitle}
        />
        <RegistryScan
          setShowAddWidget={setShowAddWidget}
          setCategoryTitle={setCategoryTitle}
        />
        {showAddWidget && (
          <AddWidget
            setShowAddWidget={setShowAddWidget}
            categoryTitle={categoryTitle}
          />
        )}
      </main>
    </>
  );
}

export default Dashboard;
