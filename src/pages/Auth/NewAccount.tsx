import { TextField, Stack, Button} from "@mui/material";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import Title from "../../components/LoginArea/Title";
import Nav from "../../components/LoginArea/Nav";
import { newAccountSchema } from "../../libs/schemas";


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

    validationSchema: newAccountSchema,

    onSubmit: (values) => {

      console.log(values)


    }
  });


  return (
    <>
      <form onSubmit={formik.handleSubmit}>

        <fieldset>

          <Title title="Create a new account" />

          <Stack spacing={4}>

            {/* User Name  */}

            <TextField
              required
              name="UserName"
              fullWidth
              label="User Name"
              value={formik.values.UserName}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              error={Boolean(formik.errors.UserName) && formik.touched.UserName}
              helperText={formik.touched.UserName && formik.errors.UserName}
              type="text" />


            <Stack direction={"row"} spacing={4}>

              {/* Name  */}

              <TextField
                required
                name="name"
                fullWidth
                label="Your Name"
                error={Boolean(formik.errors.name) && formik.touched.name}
                helperText={formik.touched.name && formik.errors.name}
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="text" />

              {/* Last Name  */}

              <TextField
                required
                name="lastName"
                fullWidth
                label="Last Name"
                error={Boolean(formik.errors.lastName) && formik.touched.lastName}
                helperText={formik.touched.lastName && formik.errors.lastName}
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="text" />

            </Stack>

            {/* Date Birthday */}

            <input
              required
              className="border focus:outline-none border-gray-300 rounded-md p-4"
              name="birthdayDate"
              value={formik.values.birthdayDate}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="Date" />

            {/* Email  */}
            
            <TextField
              name="email"
              fullWidth
              label="Email"
              error={Boolean(formik.errors.email) && formik.touched.email}
              helperText={formik.touched.email && formik.errors.email}
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="email" />

            {/* Password  */}

            <TextField
              margin="normal"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            {/* repeat Password  */}

            <TextField
              required
              name="repeatPassword"
              fullWidth
              label="Repeat Password"
              value={formik.values.repeatPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.repeatPassword && Boolean(formik.errors.repeatPassword)}
              helperText={formik.touched.repeatPassword && formik.errors.repeatPassword}
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
