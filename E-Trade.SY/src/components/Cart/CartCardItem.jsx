//mui
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Divider,
  Hidden,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";

import { useDeletaCartItem } from "../../hooks/useFetchShopCart";

// import ImageIcon from "@mui/icons-material/Image";

export default function CartCardItem({ item }) {
  const { mutate } = useDeletaCartItem();
  return (
    <Box sx={{ paddingLeft: { sm: 2 } }}>
      <Hidden smDown>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            component="p"
            sx={{
              marginY: "16px",
              width: "200px",
            }}
          >
            {item.name}
          </Typography>

          <Typography>{item.price} S.P</Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid",
              borderRadius: "8px",
            }}
          >
            <Tooltip title="add" arrow>
              <IconButton size="small" sx={{ borderRadius: 0 }}>
                <AddIcon />
              </IconButton>
            </Tooltip>
            <Typography disabled component="p" sx={{ marginX: 1 }}>
              {item.quantity}
            </Typography>
            <Tooltip title="minus" arrow>
              <IconButton size="small" sx={{ borderRadius: 0 }}>
                <RemoveIcon />
              </IconButton>
            </Tooltip>
          </Box>
          <Typography>{item.price * item.quantity} S.P</Typography>
          <IconButton onClick={() => mutate(item.id)}>
            <DeleteIcon />
          </IconButton>
        </Box>

        <Divider />
      </Hidden>
      <Hidden smUp>
        <Accordion style={{ borderRadius: "12px" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{ marginTop: 1 }}
          >
            <Typography fontWeight="bold">Product: {item.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography mb={1}>price: {item.price} S.P</Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography mr={2} component="p">
                Quantity: {item.quantity}
              </Typography>
              <Box
                sx={{
                  border: "1px solid",
                  borderRadius: "8px",
                  display: "flex",
                }}
              >
                <Tooltip title="add" arrow>
                  <IconButton size="small" sx={{ borderRadius: 0 }}>
                    <AddIcon />
                  </IconButton>
                </Tooltip>
                <Divider orientation="vertical" variant="middle" flexItem />
                <Tooltip title="minus" arrow>
                  <IconButton size="small" sx={{ borderRadius: 0 }}>
                    <RemoveIcon />
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>
            <Typography my={1}>
              total price: {item.price * item.quantity} S.P
            </Typography>
            <Tooltip title="delete item" arrow>
              <Button
                variant="outlined"
                color="warning"
                endIcon={<DeleteIcon />}
                onClick={() => mutate(item.id)}
                sx={{ textTransform: "capitalize", borderRadius: "8px" }}
              >
                delete item
              </Button>
            </Tooltip>
          </AccordionDetails>
        </Accordion>
      </Hidden>
    </Box>
  );
}
