import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import { useState } from "react";
import { addWidget } from "@/features/dashboard/dashboardSlice";
import { Plus, X } from "lucide-react";

export function AddWidget({ categoryTitle, setShowAddWidget }) {
  const [widgetTitle, setWidgetTitle] = useState("");
  const [widgetText, setWidgetText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addWidget({ categoryTitle, widget: { widgetTitle, widgetText,data:{} } }));
    setShowAddWidget(false);
  };
  return (
    <div
      tabIndex="-1"
      aria-hidden="true"
      className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-screen h-screen md:inset-0 md:h-screen backdrop-blur-sm"
    >
      <div className="relative p-4 w-screen max-w-2xl h-screen md:h-auto">
        <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
          <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Add Widget
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="defaultModal"
              onClick={() => {
                setShowAddWidget(false);
              }}
            >
              <X />
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <form action="#" onSubmit={handleSubmit}>
            <div className="grid gap-4 mb-4 sm:grid-cols-1">
              <div>
                <label
                  htmlFor="widget-name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Widget Name
                </label>
                <input
                  type="text"
                  name="widget-name"
                  id="widget-name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Widget Name"
                  value={widgetTitle}
                  onChange={(e) => setWidgetTitle(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="widget-text"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Widget Text
                </label>
                <input
                  type="text"
                  name="widget-text"
                  id="widget-text"
                  value={widgetText}
                  onChange={(e) => setWidgetText(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Widget Text"
                  required
                />
              </div>
            </div>
            <Button type="submit">
              <Plus />
              Add Widget
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
