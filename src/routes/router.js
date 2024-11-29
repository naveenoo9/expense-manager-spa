import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
} from "react-router-dom";
import RootLayout from "../layouts/root/RootLayout";
import HomeScreen from "../screens/home/HomeScreen";

export const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomeScreen />} />
    </Route>
  )
);
