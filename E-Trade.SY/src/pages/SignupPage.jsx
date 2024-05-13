//images
import signup from "../assets/signup.png";

//styles
// import "../styles/login.css";

import { Box, Grid, Hidden, useMediaQuery } from "@mui/material";

//router
import { SignupContent } from "../components/Signup/SignupContent";

export const SignupPage = () => {
  const matchesXs = useMediaQuery("(min-width:400px)");
  return (
    <Grid
      container
      justifyContent={"space-around"}
      alignitems={"center"}
      minHeight={"100vh"}
    >
      <Grid
        item
        xs={matchesXs ? 10 : 11}
        sm={6}
        md={3}
        lg={3}
        sx={{ alignSelf: "flex-start", paddingTop: { xs: 2, md: 5 } }}
      >
        <SignupContent />
      </Grid>
      <Hidden mdDown>
        <Grid
          item
          md={8}
          lg={8}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            paddingTop: "1.5em",
          }}
        >
          <Box
            component="img"
            src={signup}
            sx={{ backgroundImage: "contain" }}
            width={"100%"}
            height={"93vh"}
          />
        </Grid>
      </Hidden>
    </Grid>
  );
};
