import { createSlice } from "@reduxjs/toolkit";

export const availableWidgets = [
  {
    categoryTitle: "CSPM Executive Dashboard",
    widgets: [
      {
        id: 1,
        widgetTitle: "Cloud Accounts",
        widgetType: "PieChart",
        data: { total: 2, connected: 2, notConnected: 2 },
      },
      {
        id: 2,
        widgetTitle: "Cloud Account Risk Assessment",
        widgetType: "DonutChart",
        data: {
          total: 9659,
          failed: 1699,
          warning: 581,
          notAvailable: 54,
          passed: 7325,
        },
      },
    ],
  },
  {
    categoryTitle: "CWPP Dashboard",
    widgets: [
      {
        id: 3,
        widgetTitle: "Top 5 Namespace Specific Alerts",
        widgetType: "NoData",
        data: {},
      },
      { id: 4, widgetTitle: "Workload Alerts", widgetType: "NoData", data: {} },
    ],
  },
  {
    categoryTitle: "Registry Scan",
    widgets: [
      {
        id: 5,
        widgetTitle: "Image Risk Assessment",
        widgetType: "SingleStackedChart",
        data: {
          totalVulnerabilities: 1470,
          critical: 7,
          high: 91,
          medium: 500,
          low: 872,
        },
      },
      {
        id: 6,
        widgetTitle: "Image Security Issues",
        widgetType: "SingleStackedChart",
        data: {
          totalImages: 2,
          critical: 3,
          high: 12,
          medium: 20,
          low: 5,
        },
      },
    ],
  },
];

const initialState = {
  dashboard: [
    {
      categoryTitle: "CSPM Executive Dashboard",
      widgets: [],
    },
    {
      categoryTitle: "CWPP Dashboard",
      widgets: [],
    },
    {
      categoryTitle: "Registry Scan",
      widgets: [],
    },
  ],
  searchQuery: "",
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    addWidget: (state, action) => {
      const { categoryTitle, widget } = action.payload;
      const category = state.dashboard.find(
        (cat) => cat.categoryTitle === categoryTitle
      );
      if (category && !category.widgets.includes(widget)) {
        category.widgets.push(widget);
      }
    },
    removeWidget: (state, action) => {
      const { categoryTitle, widget } = action.payload;
      const category = state.dashboard.find(cat => cat.categoryTitle === categoryTitle);
      if (category) {
        category.widgets = category.widgets.filter(w => w.id !== widget.id);
      }
    },
    searchWidgets: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { addWidget, removeWidget, searchWidgets } =
  dashboardSlice.actions;

export const selectFilteredWidgets = (state) => {
  if (!state.dashboard.searchQuery) return state.dashboard.dashboard;

  const lowercasedQuery = state.dashboard.searchQuery.toLowerCase();

  return state.dashboard.dashboard.map((category) => ({
    ...category,
    widgets: category.widgets.filter((widget) =>
      widget.widgetTitle.toLowerCase().includes(lowercasedQuery)
    ),
  }));
};

export default dashboardSlice.reducer;
