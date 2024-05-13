//mui
import { ArrowForwardIosOutlined } from "@mui/icons-material";
import {
  Button,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";

//context
import { useThemeContext } from "../../context/ThemeModeProvider";

//fromik
import { useFormik } from "formik";

//hooks
import { useSignUp } from "../../hooks/useSignUp";

export const SignupForm = () => {
  const { darkMode } = useThemeContext();

  const { mutate } = useSignUp();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.firstName) {
        errors.firstName = "First name is required";
      } else if (values.firstName.length < 2 || values.firstName.length > 20) {
        errors.firstName = "First name must be between {2-20} characters";
      }
      if (!values.lastName) {
        errors.lastName = "Last name is required";
      } else if (values.lastName.length < 2 || values.lastName.length > 20) {
        errors.lastName = "Last name must be between {2-20} characters";
      }
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
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          password: values.password,
        };
        mutate(data);
      } catch (error) {
        console.error("Sign-up failed", error);
      }
    },
  });

  return (
    <form noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
      <FormControl fullWidth>
        <Grid container columnSpacing={2}>
          <Grid item xs={12} sm={6}>
            <StyledTextField
              id="firstname"
              label="First Name"
              variant="outlined"
              type="text"
              fullWidth
              autoComplete="off"
              noValidate
              required
              sx={{ marginBottom: 2 }}
              {...formik.getFieldProps("firstName")}
              error={formik.touched.firstName && !!formik.errors.firstName}
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <StyledTextField
              id="lastname"
              label="last name"
              variant="outlined"
              type="text"
              fullWidth
              autoComplete="off"
              noValidate
              required
              sx={{ marginBottom: 2 }}
              {...formik.getFieldProps("lastName")}
              error={formik.touched.lastName && !!formik.errors.lastName}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
          </Grid>
        </Grid>
        <StyledTextField
          id="email"
          label="Email address"
          variant="outlined"
          type="email"
          fullWidth
          noValidate
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
          type="password"
          fullWidth
          autoComplete="off"
          noValidate
          required
          sx={{ marginBottom: 2 }}
          {...formik.getFieldProps("password")}
          error={formik.touched.password && !!formik.errors.password}
          helperText={formik.touched.password && formik.errors.password}
        />
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
          <Typography variant="span">Signup</Typography>
          <ArrowForwardIosOutlined fontSize="" />
        </Button>
      </FormControl>
    </form>
  );
};

//styled component for the input
const StyledTextField = styled(TextField)`
  fieldset {
    border-radius: 8px;
  }
`;
