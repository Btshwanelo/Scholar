import { Routes, Route, Link } from "react-router-dom";
import { Records, Register, Login, Dashboard, Notfound } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="Scholar/login" element={<Login />} />
      <Route path="Scholar/register" element={<Register />} />
      <Route path="Scholar/dashboard" element={<Dashboard />} />
      <Route path="Scholar/records" element={<Records />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
}

export default App;
