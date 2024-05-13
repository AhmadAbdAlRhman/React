//mui
import { Star } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

export default function ModalItemDescription({ shopItem }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",

        paddingX: 1,
      }}
    >
      <Typography sx={{ fontWeight: "bold" }}>Description: </Typography>

      <Typography sx={{ overflow: "hidden" }}>
        product: {shopItem.name}
      </Typography>
      {/* <Typography>store: {shopItem?.data.StoreName}</Typography> */}
      <Typography>
        <span>price: </span> {shopItem.price} S.P.
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography>
          <span>rating: </span>
          {shopItem.avg ? shopItem.avg : 0}/5
        </Typography>
        <Star color="warning" fontSize="small" />
      </Box>
    </Box>
  );
}
