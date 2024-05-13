//mui
import { Tooltip } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Hidden } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

//context
import { useThemeContext } from "../../context/ThemeModeProvider";

//react hooks
import { useEffect, useState } from "react";

//componetns
import AddNewProduct from "./AddNewProduct";

export default function SellerNavbar() {
  const [showShadow, setShowShadow] = useState(false);
  const { darkMode, toggleTheme } = useThemeContext();
  const [openModal, setOpenModal] = useState(false);

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
    <>
      <AppBar
        position="fixed"
        className="app-bar"
        sx={{
          paddingX: { sm: 2, md: 7 },
          zIndex: (theme) => theme.zIndex.drawer + 1,
          boxShadow: showShadow
            ? "0 8px 32px 0 rgba(31, 38, 135, 0.37)"
            : "none",
          backgroundColor: "transparent",
          backgroundImage: "none",
        }}
      >
        <Toolbar>
          <Hidden smDown>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ sm: { mr: 2 } }}
            >
              <AddShoppingCartIcon sx={{ color: "#2200FF" }} />
            </IconButton>
          </Hidden>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "bolder" }}
            color="#2200FF"
          >
            E-Mart
          </Typography>

          <Tooltip title="add product" arrow>
            <IconButton onClick={() => setOpenModal(true)} sx={{ padding: 0 }}>
              <AddBoxIcon sx={{ color: "#2200FF", fontSize: "28px" }} />
            </IconButton>
          </Tooltip>
          <IconButton onClick={toggleTheme} sx={{ paddingLeft: 1 }}>
            {darkMode === false ? <Brightness4 /> : <Brightness7 />}
          </IconButton>

          <StyledTextField
            placeholder="serach for products"
            sx={{ width: { xs: "30vw", sm: "210.4px" } }}
            // onChange={}
            // onSubmit={() => handleSearch(input)}
          />
        </Toolbar>
      </AppBar>
      {openModal && (
        <AddNewProduct openModal={openModal} setOpenModal={setOpenModal} />
      )}
    </>
  );
}

const StyledTextField = withStyles({
  root: {
    "& .MuiOutlinedInput-root": {
      height: "40px",
      "& fieldset": {},
    },
  },
})(TextField);
