//router
import { Outlet } from "react-router-dom";

//components

import MainNavbar from "../components/main/MainNavbar";
import MainNavbarOnSmallScreens from "../components/main/MainNavbarOnSmallScreens";
import BottomNavBar from "../components/main/BottomNavBar";

//mui
import { Hidden } from "@mui/material";

export default function CustomerLayout() {
  return (
    <>
      <Hidden smDown>
        <MainNavbar />
      </Hidden>
      <Hidden smUp>
        <MainNavbarOnSmallScreens />
      </Hidden>
      <Hidden smUp>
        <BottomNavBar />
      </Hidden>
      <Outlet /> {/* ShopsLayout || cart || customerProfile */}
    </>
  );
}
