import { TextField, Stack, Button } from "@mui/material";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import Title from "../../components/LoginRouting/Title";
import Nav from "../../components/LoginRouting/Nav";

export default function ForgotPassword() {

  const formik = useFormik({

    initialValues: {
      email: "",
    },

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
            value={formik.values.email}
            onChange={formik.handleChange}
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

        <Link to="/NewAccount" className="border-b-2 pb-2 border-black  hover:text-lime-600">
          Log in
        </Link>

        <Link to="/NewAccount" className="border-b-2 pb-2 border-black   hover:text-lime-600">
          Create a Account
        </Link>
      </Nav>
    </>
  )
}

