import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";

import { ImageContext } from "../../context/HomeImageProvider";
import { useContext } from "react";

const HomeResponsiveImage = ({ altText }) => {
  const matchesSM = useMediaQuery("(min-width:600px) and (max-width:960px)");
  const matchesMD = useMediaQuery("(min-width:960px) and (max-width:1280px)");
  const matchesLG = useMediaQuery("(min-width:1280px)");

  const { homeImgSM, homeImgMD, homeImg } = useContext(ImageContext);

  let imgSrc; // default image
  if (matchesSM) {
    imgSrc = homeImgSM; // image for small devices
  } else if (matchesMD) {
    imgSrc = homeImgMD; // image for medium devices
  } else if (matchesLG) {
    imgSrc = homeImg; // image for large devices
  }

  return <Box component="img" src={imgSrc} alt={altText} borderRadius={5} />;
};

export default HomeResponsiveImage;
