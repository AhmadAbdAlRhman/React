//mui
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Slide from "@mui/material/Slide";
import TextField from "@mui/material/TextField";
import useScrollTrigger from "@mui/material/useScrollTrigger";

//HOC
function HideOnScroll({ children }) {
  const trigger = useScrollTrigger({});

  return (
    <Slide appear={false} direction="down" in={!trigger} timeout={500}>
      {children}
    </Slide>
  );
}

export default function MainNavbarOnSmallScreens() {
  return (
    <HideOnScroll>
      <StyledAppBar>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            E-Mart
          </Typography>
          <StyledTextField placeholder="search for products" />
        </Toolbar>
      </StyledAppBar>
    </HideOnScroll>
  );
}
const StyledAppBar = withStyles({
  root: {
    "& .MuiToolbar-root": {
      height: "40px",
      justifyContent: "space-between",
      backgroundColor: "#2200FF",
      "& .MuiTypography-h6": {
        color: "white",
        fontWeight: "700",
      },
    },
  },
})(AppBar);

const StyledTextField = withStyles({
  root: {
    "& .MuiOutlinedInput-root": {
      direction: "",
      height: "40px",
      backgroundColor: "white",
      color: "#333",
      "& fieldset": {},
    },
  },
})(TextField);
