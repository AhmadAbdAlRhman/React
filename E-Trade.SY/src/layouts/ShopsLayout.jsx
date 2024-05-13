//router
import { Outlet } from "react-router-dom";

//components
import ShopsDrawer from "../components/Shops/ShopsDrawer";

//mui
import { Hidden } from "@mui/material";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";

export default function ShopsLayout() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <Hidden smDown>
          <ShopsDrawer />
        </Hidden>

        <Box component="main" sx={{ flexGrow: 1, minHeight: "100vh" }}>
          <Toolbar />
          <Outlet /> {/*ShopsItems ||shops */}
        </Box>
      </Box>
    </>
  );
}
