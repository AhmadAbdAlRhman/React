import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import TimerIcon from "@mui/icons-material/Timer";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

//context
import { useThemeContext } from "../../context/ThemeModeProvider";

const HomeOurFeatures = () => {
  const { darkMode } = useThemeContext();

  const girdXsScreens = useMediaQuery("(max-width:430px)");

  const matchesXS = useMediaQuery("(max-width:600px)");
  const matchesSM = useMediaQuery("(min-width:600px) and (max-width:960px)");
  const matchesMD = useMediaQuery("(min-width:960px) and (max-width:1280px)");
  const matchesLG = useMediaQuery("(min-width:1280px)");

  let responsiveVariant; // default image
  if (matchesXS) {
    responsiveVariant = "h4"; // image for extra small devices
  } else if (matchesSM) {
    responsiveVariant = "h4"; // image for small devices
  } else if (matchesMD) {
    responsiveVariant = "h4"; // image for medium devices
  } else if (matchesLG) {
    responsiveVariant = "h3"; // image for large devices
  }

  const boxes = [
    {
      icon: (
        <LocalShippingIcon
          sx={{
            fontSize: "70px",
            color: darkMode ? "#7B66FF" : "#9c27b0",
          }}
        />
      ),
      text: "Safe and secure truck delivery, handling your products with utmost care!",
    },
    {
      icon: (
        <ShoppingBagIcon
          sx={{
            fontSize: "70px",
            color: darkMode ? "#7B66FF" : "#9c27b0",
          }}
        />
      ),
      text: "Your shopping bag items delivered with care and precision!",
    },
    {
      icon: (
        <TimerIcon
          sx={{
            fontSize: "70px",
            color: darkMode ? "#7B66FF" : "#9c27b0",
          }}
        />
      ),
      text: "Fast and reliable delivery, right to your doorstep!",
    },
  ];

  return (
    <>
      <Typography
        variant={responsiveVariant}
        textAlign={"center"}
        fontWeight={"600"}
      >
        There are no limits with us!
      </Typography>
      <Grid
        container
        rowGap={10}
        sx={{
          marginTop: 5,

          marginBottom: 10,
          justifyContent: { xs: "center", sm: "center" },
          alignItems: "center",
        }}
      >
        {boxes.map((box, index) => (
          <Grid
            key={index}
            item
            xs={girdXsScreens ? 12 : 8}
            sm={5}
            md={3}
            lg={3}
            sx={{
              marginX: 2,
            }}
          >
            <Box
              className="box"
              sx={{
                height: "250px",
                textAlign: "center",
                paddingTop: "20px",
              }}
            >
              <IconButton>{box.icon}</IconButton>
              <Typography
                variant="body1"
                ml={"auto"}
                mr={"auto"}
                sx={{ width: "60%", height: "40%", fontWeight: "600" }}
              >
                {box.text}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default HomeOurFeatures;
