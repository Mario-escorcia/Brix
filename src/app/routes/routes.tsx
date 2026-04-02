import { Login } from "@/feature/auth/components/Login";
import { createBrowserRouter } from "react-router";

let router = createBrowserRouter([
  {
    path: "/",
    element : <Login/>
  },
]);

export default router;
