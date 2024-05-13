//mui
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { Toolbar, Typography } from "@mui/material";
import { ArrowBackIos } from "@mui/icons-material";

//hooks
import useFetchShops from "../../hooks/useFetchShops";

//components
import Shop from "../Shops/shop/Shop";
import ShopsDrawerSkeleton from "./ShopsDrawerSkeleton";

//reacr router
import { NavLink } from "react-router-dom";

export default function ShopsDrawerOnSmallScreens({ open, toggleDrawer }) {
  const { isLoading, isError, data: shops } = useFetchShops();
  if (isLoading) return <ShopsDrawerSkeleton />;
  if (isError) return <div>Error...</div>;

  const DrawerList = (
    <Drawer
      variant="permanent"
      sx={{
        width: 260,
        borderRadius: `50px`,
        flexShrink: 0,

        [`& .MuiDrawer-paper`]: {
          width: 260,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto", paddingX: 2 }}>
        <List>
          <NavLink
            to="./shops"
            onClick={toggleDrawer(false)}
            className="all-shops-nav-link"
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                paddingX: 2,
              }}
            >
              <ArrowBackIos fontSize="small" />
              <Typography>All shops</Typography>
            </Box>
          </NavLink>
          {shops?.data.stores.map((shop) => (
            <Shop key={shop.id} shop={shop} toggleDrawer={toggleDrawer} />
          ))}
        </List>
      </Box>
    </Drawer>
  );

  return (
    <Drawer open={open} onClose={toggleDrawer(false)}>
      {DrawerList}
    </Drawer>
  );
}
