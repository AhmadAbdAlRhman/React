//react
import { useState } from "react";

//mui
import { ArrowForwardIosOutlined } from "@mui/icons-material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Button, FormControl, TextField, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { withStyles } from "@material-ui/core/styles";

//context
import { useThemeContext } from "../../context/ThemeModeProvider";

//react-router
import { Link } from "react-router-dom";

//formik
import { useFormik } from "formik";

//clerk

//hooks
import { useSignIn } from "../../hooks/useSignIn";

export const LoginForm = () => {
  const { darkMode } = useThemeContext();
  const [showPassword, setShowPassword] = useState(true);

  const handleClickShowPassword = (event) => {
    event.preventDefault();
    setShowPassword((show) => !show);
  };

  const { mutate } = useSignIn();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      role: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = "Email is required";
      } else if (!/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(values.email)) {
        errors.email = "Invalid email address";
      }
      if (!values.password) {
        errors.password = "password is required";
      } else if (values.password.length < 8 || values.password.length > 20) {
        errors.password = "Password must be between {8-20} characters";
        // !/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}/.test(values.password)
      }
      return errors;
    },
    onSubmit: async (values) => {
      try {
        const data = {
          email: values.email,
          password: values.password,
          role: "customer",
        };

        mutate(data);

        console.log(data);
      } catch (error) {
        console.error("Sign-in failed", error);
      }
    },
  });

  return (
    <form noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
      <FormControl fullWidth>
        <StyledTextField
          id="email"
          label="Email address"
          variant="outlined"
          type="email"
          fullWidth
          required
          sx={{
            marginBottom: 2,
          }}
          {...formik.getFieldProps("email")}
          error={formik.touched.email && !!formik.errors.email}
          helperText={formik.touched.email && formik.errors.email}
        />
        <StyledTextField
          id="password"
          label="Password"
          variant="outlined"
          type={showPassword ? "text" : "password"}
          fullWidth
          autoComplete="off"
          required
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
          sx={{ marginBottom: 2 }}
          {...formik.getFieldProps("password")}
          error={formik.touched.password && !!formik.errors.password}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Typography mb={2} textAlign={"end"}>
          <Link style={{ color: "#7B66FF", textDecoration: "none" }}>
            Forget password?
          </Link>
        </Typography>
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
            paddingX: "16.5px",
            backgroundColor: darkMode ? "#fff" : "#333",
            borderRadius: "8px",
            height: "50px",
          }}
        >
          <Typography variant="span">Login</Typography>
          <ArrowForwardIosOutlined fontSize="" />
        </Button>
      </FormControl>
    </form>
  );
};

const StyledTextField = withStyles({
  root: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderRadius: "8px",
      },
    },
  },
})(TextField);
