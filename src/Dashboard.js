import { Outlet } from "react-router";
import Appbar from "./dashboard/Appbar";
import Filters from "./dashboard/filters";


function Dashboard() {
  return (
    <>
    <Filters />
    <Outlet/>
    </>
    )
}

export default Dashboard;
