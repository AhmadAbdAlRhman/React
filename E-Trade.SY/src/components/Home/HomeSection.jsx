import { Button, Grid, Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import "../../styles/Home.css";

//components
import HomeResponsiveImage from "./HomeResponsiveImage";
import HomeResponsiveTypography from "./HomeResponsiveTypograpgy";

import { useThemeContext } from "../../context/ThemeModeProvider";

//
import { useNavigate } from "react-router-dom";

const HomeSection = ({ imgFirst, btnText }) => {
  const navigate = useNavigate();
  const { darkMode } = useThemeContext();

  const matchesSM = useMediaQuery("(min-width:600px)");
  const matchesXS = useMediaQuery("(max-width:430px)");

  return (
    <Grid
      container
      sx={{
        marginTop: 5,
        paddingX: { xs: 2, sm: 4, md: 9, lg: 8 },
        marginBottom: 10,
        paddingBottom: "10px",
        justifyContent: { xs: "center", sm: "space-between" },
        alignItems: "center",
      }}
    >
      {imgFirst &&
        (!matchesSM ? (
          <>
            <Grid item xs={matchesXS ? 12 : 8}>
              <Box
                className="box"
                sx={{
                  height: "250px",
                  textAlign: "center",
                  paddingTop: "20px",
                }}
              >
                <HomeResponsiveTypography
                  text={"Looking to "}
                  spanText={"sell or buy products?"}
                  etc={" You’ve come to the right place!"}
                />

                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: darkMode ? "#7B66FF" : "#9c27b0",
                    marginTop: "25px",
                  }}
                  onClick={() => {
                    navigate("signup");
                  }}
                >
                  {btnText}
                </Button>
              </Box>
            </Grid>
          </>
        ) : (
          <>
            <Grid item sx={{ marginTop: { md: 6, lg: 8 } }}>
              <Box>
                <HomeResponsiveImage altText="nothing" />
              </Box>
            </Grid>
            <Grid item sm={5} md={5} lg={5}>
              <Box sx={{ paddingLeft: { sm: 3, md: 10 } }}>
                <HomeResponsiveTypography
                  text={"Looking to "}
                  spanText={"sell or buy products?"}
                  etc={" You’ve come to the right place!"}
                />
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: darkMode ? "#7B66FF" : "#9c27b0",
                    marginTop: "25px",
                  }}
                  onClick={() => {
                    navigate("signup");
                  }}
                >
                  {btnText}
                </Button>
              </Box>
            </Grid>
          </>
        ))}
      {!imgFirst &&
        (!matchesSM ? (
          <>
            <Grid item xs={matchesXS ? 12 : 8}>
              <Box
                className="box"
                sx={{
                  paddingX: "15px",
                  height: "250px",
                  textAlign: "center",
                  paddingTop: "20px",
                }}
              >
                <HomeResponsiveTypography
                  text={"Welcome to our "}
                  spanText={"Online Store"}
                  etc={" your one-stop shop for everything you need!"}
                  // text={" مرحبا بك في"}
                  // spanText={"متجرنا الالكتروني"}
                  // etc={"حيث كل منتجاتك متوافرة "}
                />
                {/* <Button
                  variant="contained"
                  sx={{
                    backgroundColor: darkMode ? "#7B66FF" : "#9c27b0",
                    marginTop: "25px",
                  }}
                  onClick={() => {
                    navigate("main/shops/shop/1");
                  }}
                >
                  {btnText}
                </Button> */}
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: darkMode ? "#7B66FF" : "#9c27b0",
                    marginTop: "25px",
                  }}
                  onClick={() => {
                    navigate("store-register");
                  }}
                >
                  store register
                </Button>
              </Box>
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={12} sm={5} md={5} lg={6}>
              <Box sx={{ paddingRight: { sm: 3, lg: 20 } }}>
                <HomeResponsiveTypography
                  text={"Welcome to our "}
                  spanText={"Online Store"}
                  etc={" your one-stop shop for everything you need!"}

                  // text={" مرحبا بك في"}
                  // spanText={"متجرنا الالكتروني"}
                  // etc={"حيث كل منتجاتك متوافرة "}
                />
                {/* <Button
                  variant="contained"
                  sx={{
                    marginTop: "20px",
                    backgroundColor: darkMode ? "#7B66FF" : "#9c27b0",
                  }}
                  onClick={() => navigate("main/shops/shop/1")}
                >
                  {btnText}
                </Button> */}
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: darkMode ? "#7B66FF" : "#9c27b0",
                    marginTop: "25px",
                  }}
                  onClick={() => {
                    navigate("store-register");
                  }}
                >
                  store register
                </Button>
              </Box>
            </Grid>
            <Grid item alignSelf="end">
              <Box>
                <HomeResponsiveImage altText="nothing" />
              </Box>
            </Grid>
          </>
        ))}
    </Grid>
  );
};

export default HomeSection;
