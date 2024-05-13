//mui
import { withStyles } from "@material-ui/core/styles";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";

//context
import { useThemeContext } from "../../context/ThemeModeProvider";

//react hooks
import { useEffect, useState } from "react";

//router
import { NavLink } from "react-router-dom";

export default function MainNavbar() {
  const [showShadow, setShowShadow] = useState(false);
  const { darkMode, toggleTheme } = useThemeContext();
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
      position="fixed"
      className="app-bar"
      sx={{
        paddingX: { sm: 2, md: 7 },
        zIndex: (theme) => theme.zIndex.drawer + 1,
        boxShadow: showShadow ? "0 8px 32px 0 rgba(31, 38, 135, 0.37)" : "none",
        backgroundColor: "transparent",
        backgroundImage: "none",
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
          sx={{ flexGrow: 1, fontWeight: "bolder" }}
          color="#2200FF"
        >
          E-Mart
        </Typography>
        <Tooltip title="shops" arrow>
          <NavLink to={`shops`} className="navbar-link">
            <IconButton>
              <StorefrontIcon />
            </IconButton>
          </NavLink>
        </Tooltip>
        <Tooltip title="cart" arrow>
          <NavLink to="cart" className="navbar-link">
            <IconButton>
              <Badge badgeContent={4} color="warning">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </NavLink>
        </Tooltip>
        <Tooltip title="profile" arrow>
          <NavLink to="customer-profile" className="navbar-link">
            <IconButton>
              <AccountCircleIcon />
            </IconButton>
          </NavLink>
        </Tooltip>
        <IconButton onClick={toggleTheme}>
          {darkMode === false ? <Brightness4 /> : <Brightness7 />}
        </IconButton>
        <StyledTextField
          placeholder="serach for products"
          value={""}
          // onChange={}
          // onSubmit={() => handleSearch(input)}
        />
      </Toolbar>
    </AppBar>
  );
}

const StyledTextField = withStyles({
  root: {
    "& .MuiOutlinedInput-root": {
      direction: "",
      height: "40px",
      "& fieldset": {},
    },
  },
})(TextField);
