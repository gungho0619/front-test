import { Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import ForgotPassword from "./pages/Auth/ForgotPasssword";
import GardenMap from "./pages/GardenMap";
import Plant from "./pages/Plant";
import Plant1 from "./pages/Plant1";
import Landing from "./pages/Landing";

export default function Router() {
  return (
    <Routes>
      <Route path="/" Component={Login} />
      <Route path="/login" Component={Login} />
      <Route path="/register" Component={Register} />
      <Route path="/forgot-password" Component={ForgotPassword} />
      <Route path="/garden-map" Component={GardenMap} />
      <Route path="/plant" Component={Plant} />
      <Route path="/plant1" Component={Plant1} />
      <Route path="/landing" Component={Landing} />
    </Routes>
  );
}
