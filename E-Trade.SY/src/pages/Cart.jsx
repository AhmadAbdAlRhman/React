//mui
import { ArrowBackIosNewRounded } from "@mui/icons-material";
import { Box, Button, Toolbar, Hidden } from "@mui/material";

//hooks
import { useFetchCartItems } from "../hooks/useFetchShopCart";

//context
import { useThemeContext } from "../context/ThemeModeProvider";

//router
import { Link } from "react-router-dom";

//components
import CartCard from "../components/Cart/CartCard";
// import { useSelector } from "react-redux";

export default function Cart() {
  const { isLoading, isError, data: items } = useFetchCartItems();
  const { darkMode } = useThemeContext();

  if (isLoading) return <>loading....</>;
  if (isError) return <>error....</>;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        paddingX: { xs: 2, sm: 5, md: 10, lg: 10 },
        paddingY: 1,
        backgroundColor: darkMode ? "#121212" : "#fff",
      }}
    >
      <Toolbar />
      <CartCard items={items} darkMode={darkMode} />

      <Hidden smDown>
        <Link to="../shops">
          <Button variant="outlined">
            <ArrowBackIosNewRounded fontSize="sm" sx={{ paddingRight: 2 }} />
            continue shopping
          </Button>
        </Link>
      </Hidden>
    </Box>
  );
}
