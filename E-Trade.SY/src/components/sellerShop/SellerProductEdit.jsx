//mui
import EditIcon from "@mui/icons-material/Edit";
import { Box } from "@mui/material";

export default function SellerProductEdit() {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 90,
        left: 10,
        display: "flex",
        alignItems: "center",

        backgroundColor: "#e6b356",
        color: "#fff",
        borderRadius: "12px",
        paddingX: 1,
      }}
    >
      <EditIcon color="#e6b356" fontSize="medium" />
    </Box>
  );
}
