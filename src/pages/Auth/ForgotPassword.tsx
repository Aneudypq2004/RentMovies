import { TextField, Stack, Button } from "@mui/material";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import Title from "../../components/LoginArea/Title";
import Nav from "../../components/LoginArea/Nav";
import { ForgotPasswordSchema } from "../../libs/schemas";
export default function ForgotPassword() {
  
  const formik = useFormik({

    initialValues: {
      email: "",
    },

    validationSchema: ForgotPasswordSchema,

    onSubmit: (values) => {

      console.log(values)

    }
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>

        <Title title="Dont you remember your password?" />

        <Stack spacing={4}>

          <TextField
            name="email"
            fullWidth
            label="Email"
            error={Boolean(formik.errors.email) && formik.touched.email}
            helperText={ formik.touched.email && formik.errors.email}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="email" />

          <Button
            variant="contained"
            type="submit"
            color="success"
            size="large">Send </Button>

        </Stack>

      </form>

      {/*  Navegation */}

      <Nav>

        <Link to="/login" className="border-b-2 pb-2 border-black  hover:text-lime-600">
          Log in
        </Link>

        <Link to="/NewAccount" className="border-b-2 pb-2 border-black   hover:text-lime-600">
          Create a Account
        </Link>
      </Nav>
    </>
  )
}

