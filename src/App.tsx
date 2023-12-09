import { Route, Routes, Navigate } from "react-router-dom";
import P404 from "./pages/404";
import AuthLayer from "./pages/Auth/AuthLayer";
import Login from "./pages/Auth/Login";
import NewAccount from "./pages/Auth/NewAccount";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import ProtectedLayer from "./pages/ProtectedRoutes/ProtectedLayer";
import Home from "./pages/ProtectedRoutes/Home";
import Card from "./pages/ProtectedRoutes/Card";

function App() {
  return (
    // ROUTING

    <Routes>
      <Route path="/" element={<Navigate to="/Login" />} />

      {/* // Routes auth  */}

      <Route path="/" Component={AuthLayer}>
        <Route path="Login" Component={Login} />
        <Route path="NewAccount" Component={NewAccount} />
        <Route path="Forgot-Password" Component={ForgotPassword} />
      </Route>

      {/* Protected Routes  */}

      <Route path='/home' Component={ProtectedLayer}>
        <Route index Component={Home} />
        <Route path="card" Component={Card} />
      </Route>

      <Route path="*" Component={P404} />
    </Routes>
  );
}

export default App;
