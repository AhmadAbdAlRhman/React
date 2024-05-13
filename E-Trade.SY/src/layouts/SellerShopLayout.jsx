//components
import SellerNavbar from "../components/sellerShop/SellerNavbar";

//router
import { Outlet } from "react-router-dom";

//mui
import { Toolbar } from "@material-ui/core";
import { Box } from "@mui/material";

export default function SellerShopLayout() {
  return (
    <Box sx={{ display: "flex" }}>
      <SellerNavbar />
      <Box component="main" sx={{ flexGrow: 1, minHeight: "100vh" }}>
        <Toolbar />
        <Outlet /> {/*SellerProducts*/}
      </Box>
    </Box>
  );
}
