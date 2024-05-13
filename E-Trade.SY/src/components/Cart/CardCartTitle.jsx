//mui
import { Box, Divider, Hidden, Typography } from "@mui/material";
import ListSubheader from "@mui/material/ListSubheader";

export default function CardCartTitle({ darkMode }) {
  return (
    <>
      <Hidden smDown>
        <ListSubheader
          sx={{
            backgroundColor: darkMode ? "#2200FF" : "#00ffff",
            borderRadius: "12px",
            marginY: 2,
            height: "6vh",
            display: "flex",
            alignItems: "center",
            color: darkMode ? "#fff" : "#121212",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginY: 2,
              width: "100%",
            }}
          >
            <Typography width="190px">Product</Typography>
            <Typography component="p">Price</Typography>
            <Typography component="p">Quantity</Typography>
            <Typography component="p">Total price</Typography>
            <Typography />{" "}
            {/* to fix the row alignment under each other with the <CardCartItem /> */}
          </Box>
        </ListSubheader>
        <Divider sx={{ marginX: 2 }} />
      </Hidden>
    </>
  );
}
