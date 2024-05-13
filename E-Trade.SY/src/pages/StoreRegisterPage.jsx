//mui
import { Box } from "@mui/material";

//components
import StoreRegisterContent from "../components/storeRegister/StoreRegisterContent";

export default function StoreRegisterPage() {
  return (
    <Box
      sx={{
        width: { sm: "90vw", md: "70vw", lg: "55vw" },
        height: { xs: "100vh", md: "95vh" },
        paddingX: { xs: 2, sm: 5 },
        paddingTop: { md: 5 },
        position: { md: "relative" },
        left: { md: "50%" },
        transform: { md: "translateX(-50%)" },
      }}
    >
      <StoreRegisterContent />
    </Box>
  );
}
