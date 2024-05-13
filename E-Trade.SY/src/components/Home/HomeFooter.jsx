import { Box, Typography } from "@mui/material";

const HomeFooter = () => {
  return (
    <Box
      backgroundColor={"#0099ff"}
      height={"50px"}
      sx={{
        backgroundColor: "#0099ff",
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingX: { xs: 2, sm: "30px", md: "70px", lg: "60px" },
        fontWeight: "bold",
      }}
    >
      <Typography variant="p">E-Trade.sy</Typography>
      <Typography variant="p">@2024</Typography>
    </Box>
  );
};

export default HomeFooter;
