import { createContext } from "react";

export const ImageContext = createContext();

const HomeImageProvider = ({ children, homeImgSM, homeImgMD, homeImg }) => {
  return (
    <ImageContext.Provider value={{ homeImgSM, homeImgMD, homeImg }}>
      {children}
    </ImageContext.Provider>
  );
};

export default HomeImageProvider;
