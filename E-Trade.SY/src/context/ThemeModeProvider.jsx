//hooks
import { createContext, useContext, useState } from "react";

//mui
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Paper } from "@mui/material";
import { withStyles } from "@material-ui/core/styles";

const ThemeContext = createContext();

export const ThemeModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <StyledPaper>{children}</StyledPaper>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export function useThemeContext() {
  return useContext(ThemeContext);
}

const StyledPaper = withStyles({
  root: {
    "& .MuiPaper-root": {
      backgroundColor: "",
    },
  },
})(Paper);
