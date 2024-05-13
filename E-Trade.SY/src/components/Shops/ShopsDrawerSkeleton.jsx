//mui
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import { Skeleton } from "@mui/material";

const drawerWidth = 260;
export default function ShopsDrawerSkeleton() {
  return (
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
        sx={{ overflowY: "scroll", "::-webkit-scrollbar": { display: "none" } }}
      >
        <List>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((skeleton, index) => (
            <Box
              key={index}
              sx={{ mt: 1, paddingX: { xs: 3, sm: 5, md: 10, lg: 10 } }}
            >
              <ListItem disablePadding>
                <ListItemText
                  primary={
                    <Skeleton
                      variant="rounded"
                      width={150}
                      height={40}
                      animation="wave"
                    />
                  }
                />
              </ListItem>
            </Box>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
