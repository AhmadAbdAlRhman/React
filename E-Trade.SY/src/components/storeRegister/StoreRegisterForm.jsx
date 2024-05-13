//mui
import { withStyles } from "@material-ui/core/styles";
import { ArrowForwardIosOutlined } from "@mui/icons-material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  Box,
  Button,
  FormControl,
  Grid,
  Hidden,
  TextField,
  Typography,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";

//context
import { useThemeContext } from "../../context/ThemeModeProvider";

//router

//fromik
import { useFormik } from "formik";

//hooks
import { useCreateStore } from "../../hooks/useCreateStore";

//react
import { useState } from "react";
import { Link } from "react-router-dom";

const storeTypes = [
  {
    type: "Clothing",
  },
  {
    type: "Grocerry",
  },
  {
    type: "Electronics",
  },
  {
    type: "Mobiles & Laptops",
  },
];

export default function StoreRegisterForm() {
  const [showPassword, setShowPassword] = useState(true);
  const { darkMode } = useThemeContext();

  const handleClickShowPassword = (event) => {
    event.preventDefault();
    setShowPassword((show) => !show);
  };

  const { mutate } = useCreateStore();

  const formik = useFormik({
    initialValues: {
      storeName: "",
      storeType: "",
      sellerEmail: "",
      password: "",
      sellerName: "",
      sellerPhone: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.storeName) {
        errors.storeName = "Store name is required";
      } else if (values.storeName.length < 2 || values.storeName > 20) {
        errors.storeName = "First name must be between {2-20} characters";
      }
      if (!values.storeType) {
        errors.storeType = "Store type is required";
      } else if (values.storeType.length < 2 || values.storeType.length > 20) {
        errors.storeType = "Store type must be between {2-20} characters";
      }
      if (!values.sellerEmail) {
        errors.sellerEmail = "Email is required";
      } else if (
        !/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(values.sellerEmail)
      ) {
        errors.sellerEmail = "Invalid email address";
      }
      if (!values.password) {
        errors.password = "Password is required";
      } else if (values.password.length < 8 || values.password.length > 20) {
        errors.password = "Password must be between {8-20} characters";
        // !/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}/.test(values.password)
      }
      if (!values.sellerName) {
        errors.sellerName = "Seller name is required";
      } else if (
        values.sellerName.length < 2 ||
        values.sellerName.length > 20
      ) {
        errors.sellerName = "seller name must be between {2-20} characters";
      }

      if (!values.sellerPhone) {
        errors.sellerPhone = "seller phone is required";
      } else if (!/^((963))\d{9}$/.test(values.sellerPhone)) {
        errors.sellerPhone =
          "seller phone must start with (963) and have a length of 11 characters";
      }
      return errors;
    },
    onSubmit: (values) => {
      try {
        const data = {
          StoreName: values.storeName,
          storeKind: values.storeType,
          sellerEmail: values.sellerEmail,
          password: values.password,
          sellerName: values.sellerName,
          sellerPhone: values.sellerPhone,
        };
        mutate(data);
      } catch (error) {
        console.error("Store creation failed", error);
      }
      // console.log(values);
    },
  });

  return (
    <Box
      sx={{
        borderRadius: "16px",
        background: darkMode
          ? "rgba(17, 25, 40, 1)"
          : "rgba( 255, 255, 255, 0.9)",
        boxShadow: darkMode ? "" : "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        border: "1px solid rgba(255, 255, 255, 0.125)",
        paddingX: { xs: 2, sm: 5 },
        paddingY: { xs: 2, sm: 3 },
        marginBottom: 3,
      }}
    >
      <form noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
        <FormControl fullWidth>
          <Grid container spacing={2} sx={{ placeContent: "space-between" }}>
            <Grid item xs={12} sm={6}>
              <StyledTextField
                id="storeName"
                label="store name"
                variant="outlined"
                required
                fullWidth
                {...formik.getFieldProps("storeName")}
                error={formik.touched.storeName && !!formik.errors.storeName}
                helperText={formik.touched.storeName && formik.errors.storeName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledTextField
                id="storeType"
                label="store type"
                select
                variant="outlined"
                required
                fullWidth
                {...formik.getFieldProps("storeType")}
                error={formik.touched.storeType && !!formik.errors.storeType}
                helperText={formik.touched.storeType && formik.errors.storeType}
              >
                {storeTypes.map((option) => (
                  <MenuItem key={option.type} value={option.type}>
                    {option.type}
                  </MenuItem>
                ))}
              </StyledTextField>
            </Grid>

            <Grid item xs={12} sm={6}>
              <StyledTextField
                id="sellerEmail"
                label="email"
                variant="outlined"
                required
                fullWidth
                {...formik.getFieldProps("sellerEmail")}
                error={
                  formik.touched.sellerEmail && !!formik.errors.sellerEmail
                }
                helperText={
                  formik.touched.sellerEmail && formik.errors.sellerEmail
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledTextField
                id="password"
                label="Password"
                variant="outlined"
                type={showPassword ? "text" : "password"}
                autoComplete="off"
                required
                fullWidth
                {...formik.getFieldProps("password")}
                error={formik.touched.password && !!formik.errors.password}
                helperText={formik.touched.password && formik.errors.password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledTextField
                id="sellerName"
                label="full name"
                variant="outlined"
                required
                fullWidth
                {...formik.getFieldProps("sellerName")}
                error={formik.touched.sellerName && !!formik.errors.sellerName}
                helperText={
                  formik.touched.sellerName && formik.errors.sellerName
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledTextField
                id="sellerPhone"
                label="phone number"
                variant="outlined"
                type="tel"
                required
                fullWidth
                {...formik.getFieldProps("sellerPhone")}
                error={
                  formik.touched.sellerPhone && !!formik.errors.sellerPhone
                }
                helperText={
                  formik.touched.sellerPhone && formik.errors.sellerPhone
                }
              />
            </Grid>
            <Hidden smDown>
              <Grid item sm={5} md={4}>
                <Typography sx={{ fontWeight: 600 }}>
                  have a store?{" "}
                  <Link
                    to="../login"
                    style={{ color: "#7B66FF", textDecoration: "none" }}
                  >
                    Sign in
                  </Link>
                </Typography>
              </Grid>
            </Hidden>
            <Grid item xs={12} sm={5} md={4} lg={4}>
              <Button
                className="btn"
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
                size="large"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  textTransform: "capitalize",

                  backgroundColor: darkMode ? "#fff" : "#333",
                  borderRadius: "8px",
                  height: "50px",
                }}
              >
                <Typography variant="span">Create Store</Typography>
                <ArrowForwardIosOutlined fontSize="" />
              </Button>
            </Grid>
            <Hidden smUp>
              <Grid item xs={12}>
                <Typography sx={{ fontWeight: 600 }}>
                  have a store?{" "}
                  <Link
                    to="../login"
                    style={{ color: "#7B66FF", textDecoration: "none" }}
                  >
                    Sign in
                  </Link>
                </Typography>
              </Grid>
            </Hidden>
          </Grid>
        </FormControl>
      </form>
    </Box>
  );
}

const StyledTextField = withStyles({
  root: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderRadius: "8px",
      },
    },
  },
})(TextField);
