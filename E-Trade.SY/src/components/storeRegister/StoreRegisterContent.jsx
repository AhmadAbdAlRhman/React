//mui
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Box, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";

//router
import { Link } from "react-router-dom";

//components
import StoreRegisterForm from "./StoreRegisterForm";

export default function StoreRegisterContent() {
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Link to="../">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={
              {
                // mb: 1,
                // justifySelf: "start",
              }
            }
          >
            <AddShoppingCartIcon sx={{ fontSize: 30 }} />
          </IconButton>
        </Link>
        <Typography
          variant="h6"
          component="div"
          sx={{ fontWeight: "bolder" }}
          color="#2200FF"
        >
          E-Mart
        </Typography>
      </Box>
      <Typography
        variant={"h6"}
        sx={{ mb: { xs: 1, sm: 3 }, fontWeight: "bold" }}
      >
        Create Your Store now:
      </Typography>
      <StoreRegisterForm />
    </>
  );
}
