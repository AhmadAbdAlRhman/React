//styles
import "./App.css";

//context
import { ThemeModeProvider } from "./context/ThemeModeProvider";

//router
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";

//clerk

function App() {
  return (
    <ThemeModeProvider>
      <RouterProvider router={router} />
    </ThemeModeProvider>
  );
}

export default App;
