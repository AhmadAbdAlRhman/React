//components
import HomeNavBar from "../components/Home/HomeNavBar";
import HomeSection from "../components/Home/HomeSection";
import HomeOurFeatures from "../components/Home/HomeOurFeatures";
import HomeFooter from "../components/Home/HomeFooter";

//context
import HomeImageProvider from "../context/HomeImageProvider";

//material ui
import Box from "@mui/material/Box";

//images
import homeImg1 from "../assets/1-lg.png";
import homeImgMD1 from "../assets/1-md.png";
import homeImgSM1 from "../assets/1-sm.png";
import homeImg2 from "../assets/2-lg.png";
import homeImgMD2 from "../assets/2-md.jpg";
import homeImgSM2 from "../assets/2-sm.jpg";
import svg1 from "../assets/wave1.svg";
import svg from "../assets/wave.svg";

//styles
import "../styles/home.css";

//context
import { useThemeContext } from "../context/ThemeModeProvider";

const sections = [
  {
    homeImg: homeImg1,
    homeImgMD: homeImgMD1,
    homeImgSM: homeImgSM1,
    btnText: "login as a Guest",
  },
  {
    homeImg: homeImg2,
    homeImgMD: homeImgMD2,
    homeImgSM: homeImgSM2,
    btnText: "Sign up",
    imgFirst: true,
  },
];

const Home = () => {
  const { darkMode } = useThemeContext();

  return (
    <Box dir="ltr" sx={{ backgroundColor: darkMode ? "#121212" : "" }}>
      <HomeNavBar />
      <Box
        sx={{
          flexGrow: 1,
          backgroundImage: { xs: `url(${svg})`, sm: `url(${svg1})` },
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="home"
      >
        {sections.map((section, index) => (
          <HomeImageProvider key={index} {...section}>
            <HomeSection {...section} />
          </HomeImageProvider>
        ))}
      </Box>
      <HomeOurFeatures />
      <HomeFooter />
    </Box>
  );
};

export default Home;
