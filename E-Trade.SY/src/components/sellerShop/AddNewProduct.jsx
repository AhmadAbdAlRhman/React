//react hooks
import { useState } from "react";

//mui
import { Close } from "@mui/icons-material";
import LoadingButton from "@mui/lab/LoadingButton";
import { Box, FormControl, IconButton, Modal } from "@mui/material";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,

  display: "flex",
  flexDirection: "column",
  bgcolor: "background.paper",
  borderRadius: "12px",
  boxShadow: "0 8px 12px 0 rgba(31, 38, 135, 0.37)",
  p: 4,
};

const initialProduct = {
  name: "",
  image: "",
  optionalImages: [],
  quantity: 0,
  price: 0,
};

export default function AddNewProduct({ openModal, setOpenModal }) {
  const [product, setProduct] = useState(initialProduct);
  const [loading, setLoading] = useState(false);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   console.log(product);
  //   // here to mutate
  // };

  const handleChange = (field, value) => {
    if (field === "optionalImages") {
      const files = Array.from(value);
      const urls = [];

      files.forEach((file) => {
        const reader = new FileReader();
        reader.onload = () => {
          urls.push(reader.result);
          if (urls.length === files.length) {
            setProduct({
              ...product,
              [field]: [...product[field], ...urls],
            });
          }
        };
        reader.readAsDataURL(file);
      });
    } else {
      setProduct({
        ...product,
        [field]: value,
      });
    }
  };

  return (
    <>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Box sx={style}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Typography variant="h5" color={"primary"} fontWeight={"600"}>
              Add Product:
            </Typography>
            <IconButton
              onClick={() => setOpenModal(false)}
              sx={{
                backgroundColor: "#1976d2",
                ":hover": { backgroundColor: "#ff4d4d" },
              }}
            >
              <Close sx={{ fontSize: "28px", color: "#fff" }} />
            </IconButton>
          </Box>
          <form>
            <FormControl fullWidth>
              <Typography mb={1} color={"primary"}>
                Main Image:*
              </Typography>
              <TextField
                type="file"
                required
                onChange={(e) => handleChange("image", e.target.value)}
                sx={{ mb: 2 }}
              />

              <Typography mb={1} color={"primary"}>
                Optional Images:
              </Typography>
              <TextField
                type="file"
                multiple
                onChange={(e) => handleChange("optionalImages", e.target.files)}
                sx={{ mb: 2 }}
              />

              <Typography mb={1} color={"primary"}>
                Product Name:*
              </Typography>
              <TextField
                type="text"
                required
                placeholder="Product Name"
                onChange={(e) => handleChange("name", e.target.value)}
                sx={{ mb: 2 }}
              />
              <Typography mb={1} color={"primary"}>
                Quantity:*
              </Typography>
              <TextField
                type="number"
                required
                placeholder="Quantity"
                onChange={(e) => handleChange("quantity", e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{ inputProps: { min: 0 } }}
                sx={{ mb: 2 }}
              />
              <Typography mb={1} color={"primary"}>
                Price:*
              </Typography>
              <TextField
                type="number"
                required
                placeholder="Price in Syrian pounds"
                onChange={(e) => handleChange("price", e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{ inputProps: { min: 0 } }}
                sx={{ mb: 2 }}
              />
              <LoadingButton
                loading={loading}
                type="submit"
                variant="contained"
                sx={{ fontWeight: "bold", color: "#fff" }}
              >
                Add
              </LoadingButton>
            </FormControl>
          </form>
        </Box>
      </Modal>
    </>
  );
}
