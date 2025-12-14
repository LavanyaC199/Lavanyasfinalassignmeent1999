import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* ✅ TASK DASHBOARD */}
      <Route path="/tasks" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
