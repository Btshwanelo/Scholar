import Dashboard from "./pages/Dashboard";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Records from "./pages/Records";

function App() {
  return (
    <Routes>
      <Route path="Scholar/login" element={<Login />} />
      <Route path="Scholar/register" element={<Register />} />
      <Route path="Scholar/dashboard" element={<Dashboard />} />
      <Route path="Scholar/records" element={<Records />} />
    </Routes>
  );
}

export default App;
