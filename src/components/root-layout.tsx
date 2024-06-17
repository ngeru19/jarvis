import { Outlet } from "react-router-dom";
import NavigationHeader from "./navigation-header";

export default function RootLayout() {
  return (
    <main>
      <NavigationHeader />
      <Outlet />
    </main>
  );
}
