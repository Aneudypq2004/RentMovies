import { TextField, Stack, Button } from "@mui/material";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import Title from "../../components/LoginRouting/Title";
import Nav from "../../components/LoginRouting/Nav";

export default function NewAccount() {

  const formik = useFormik({

    initialValues: {
      name: "",
      lastName: "",
      email: "",
      password: "",
      repeatPassword: "",
      UserName: "",
      birthdayDate: "",
    },

    validate: (values) => {

      console.log(values)
      


      return {
        email : "El email no es valido"
      }

    },

    onSubmit: (values) => {

      console.log(values)

    }
  });


  return (
    <>
      <form onSubmit={formik.handleSubmit}>

        <fieldset>

          {<Title title="Create a new account" />}

          <Stack spacing={4}>

            {/* User Name  */}

            <TextField
              required
              name="UserName"
              fullWidth
              label="User Name"
              value={formik.values.UserName}
              onChange={formik.handleChange}
              type="text" />


            <Stack direction={"row"} spacing={4}>

              {/* Name  */}

              <TextField
                required
                name="name"
                fullWidth
                label="Your Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                type="text" />

              {/* Last Name  */}

              <TextField
                required
                name="lastName"
                fullWidth
                label="Last Name"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                type="text" />

            </Stack>

            {/* Date Birthday */}

            <input
              required
              className="border focus:outline-none border-gray-300 rounded-md p-4"
              name="Date Birthday"
              value={formik.values.birthdayDate}
              onChange={formik.handleChange}
              type="Date" />

            {/* Email  */}

            <TextField
              required
              name="email"
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && Boolean(formik.errors.email)}
              fullWidth
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              type="email" />

            {/* Password  */}

            <TextField
              required
              name="password"
              error={formik.touched.password}
              helperText="No KDNJ"
              fullWidth
              label="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              type="password" />

            <TextField
              required
              name="repeatPassword"
              fullWidth
              label="Repeat Password"
              value={formik.values.repeatPassword}
              onChange={formik.handleChange}
              type="password" />

            <Button
              variant="contained"
              type="submit"
              color="success"
              size="large">Create</Button>

          </Stack >

        </fieldset>

      </form>

      {/*  Navegation */}

      <Nav>

        <Link to="/login" className="border-b-2 pb-2 border-black hover:text-lime-600">
          You have a account?  Log IN
        </Link>

        <Link to="/Forgot-Password" className="border-b-2 pb-2 border-black hover:text-lime-600">
          Forgot my password
        </Link>
      </Nav>
    </>
  )
}
