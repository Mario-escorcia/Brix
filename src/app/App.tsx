import { RouterProvider } from "react-router";
import "./App.css";
import router from "./routes/routes";

function App() {
  let routes = router;
  return <RouterProvider router={routes} />;
}

export default App;
