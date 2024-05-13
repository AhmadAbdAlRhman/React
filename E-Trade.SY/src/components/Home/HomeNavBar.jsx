////material ui
import { Brightness4, Brightness7 } from "@mui/icons-material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Hidden } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

//hooks
import { useEffect, useState } from "react";

//context
import { useThemeContext } from "../../context/ThemeModeProvider";

//router
import { useNavigate } from "react-router-dom";

const HomeNavBar = () => {
  const navigate = useNavigate();
  //useMemo to avoid unnecessary updates, remember
  const { darkMode, toggleTheme } = useThemeContext();
  const [showShadow, setShowShadow] = useState(false);
  const checkScroll = () => {
    if (window.scrollY > 0) {
      setShowShadow(true);
    } else {
      setShowShadow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <AppBar
      position="sticky"
      className="app-bar"
      sx={{
        backgroundColor: "transparent",
        backgroundImage: "none",
        paddingX: { xs: 0, sm: 1, md: 6, lg: 5 },
      }}
      style={{
        boxShadow: showShadow ? "0 8px 32px 0 rgba(31, 38, 135, 0.37)" : "none",
      }}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ sm: { mr: 2 } }}
        >
          <AddShoppingCartIcon sx={{ color: "#2200FF" }} />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, fontWeight: 700 }}
          color="#2200FF"
        >
          E-Mart
          {/* إي مارت */}
        </Typography>
        <IconButton onClick={toggleTheme}>
          {darkMode === false ? <Brightness4 /> : <Brightness7 />}
        </IconButton>
        <Button
          variant="contained"
          sx={{ backgroundColor: darkMode ? "#365486" : "#1976d2" }}
          onClick={() => {
            navigate("login");
          }}
        >
          Login
        </Button>

        <Hidden smDown>
          <Button
            variant="contained"
            sx={{
              backgroundColor: darkMode ? "#7B66FF" : "#9c27b0",
              ml: "10px",
            }}
            onClick={() => {
              navigate("signup");
            }}
          >
            Sign up
          </Button>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default HomeNavBar;
