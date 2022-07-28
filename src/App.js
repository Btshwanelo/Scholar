import { Routes, Route, Link } from "react-router-dom";
import { Records, Register, Login, Dashboard, Notfound } from "./pages";
import withRouter from "./hook";

function App(props) {
  console.log(props);
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/records" element={<Records />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default withRouter(App);
