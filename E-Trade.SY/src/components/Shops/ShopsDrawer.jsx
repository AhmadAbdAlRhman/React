//mui
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";

//hooks
import useFetchShops from "../../hooks/useFetchShops";

//component
import Shop from "./shop/Shop";
import ShopsDrawerSkeleton from "./ShopsDrawerSkeleton";

//reacr router
import { NavLink } from "react-router-dom";

const drawerWidth = 260;
export default function ShopsDrawer() {
  const { isLoading, isError, data: shops } = useFetchShops();

  if (isLoading) return <ShopsDrawerSkeleton />;
  if (isError) return <div>Error...</div>;
  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box
          sx={{
            overflowY: "scroll",
            "::-webkit-Scrollbar": { display: "none" },
            paddingX: 2,
          }}
        >
          <List>
            <NavLink to="../shops" className="all-shops-nav-link">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  paddingX: { sm: 3, md: 8, lg: 8 },
                }}
              >
                <Typography sx={{ fontWeight: "bold" }}>All shops</Typography>
              </Box>
            </NavLink>
            {/* shops.data.stores.map */}
            {shops?.data.stores.map((shop) => (
              //to avoid any errors "toggle drawer is not a function" fixed by toggleDrawer={() => false}
              <Shop key={shop.id} shop={shop} toggleDrawer={() => false} />
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
