import "./App.css";
import Navbar from "./components/sub-components/Navbar";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="flex flex-col w-full min-h-screen bg-gray-100">
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
