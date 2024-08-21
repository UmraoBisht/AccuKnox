import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Link } from "react-router-dom";
import { BellRing, User2 } from "lucide-react";
import { useDispatch } from "react-redux";
import {
  searchWidgets,
  selectFilteredWidgets,
} from "@/features/dashboard/dashboardSlice";

function Navbar() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    dispatch(searchWidgets(e.target.value));
    dispatch(selectFilteredWidgets());
  };
  return (
    <header className="flex items-center justify-between h-16 px-4 border-b bg-white">
      <div className="flex items-center space-x-4">
        <nav className="flex items-center space-x-4">
          <Link to="#" className="text-sm font-medium text-gray-700">
            Home
          </Link>
          <span className="text-sm font-medium text-gray-500">/</span>
          <Link to="#" className="text-sm font-medium text-gray-700">
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
            value={search}
            onChange={handleSearchChange}
            className="w-full rounded-lg bg-gray-100 pl-8 pr-4 py-2 text-sm"
          />
        </div>
        <Button variant="outline" className="text-sm">
          <BellRing />
        </Button>
        <Button variant="outline" className="text-sm">
          <User2 />
        </Button>
      </div>
    </header>
  );
}

export default Navbar;
