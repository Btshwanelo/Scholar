import { Routes, Route, Link } from "react-router-dom";
import { Records, Register, Login, Dashboard, Notfound } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/records" element={<Records />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
}

export default App;
