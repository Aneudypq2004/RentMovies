import {
  TextField,
  Box,
  Typography,
  Button,
  FormControlLabel,
  Checkbox,
  Alert
} from "@mui/material"

import { useFormik } from "formik"
import { Link } from 'react-router-dom'
import Nav from "../../components/LoginArea/Nav"
import { useState } from "react"
import { SignInSchema } from "../../libs/schemas"


export default function Login() {

  const [checked, setChecked] = useState(Boolean(localStorage.getItem("RememberEmail")) ?? false);

  const [Email, setEmail] = useState(localStorage.getItem("RememberEmail") ?? "");

  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {

    setChecked(e.target.checked);

    // if the user uncheck

    if (!checked) {
      localStorage.removeItem("RememberEmail");
    }
  }
  // FORMIK

  const formik = useFormik({

    initialValues: {
      email: Email,
      password: ""
    },

    validationSchema: SignInSchema,

    // 
    onSubmit: (values) => {


      if (checked) {
        localStorage.setItem("RememberEmail", values.email);
        setEmail("");
      }
    }
  })
  return (
    <>
      <Typography className="text-center" component="h1" variant="h5">  Sign in </Typography>

      <Alert variant="filled" color="success"  title={Email} />

      {/* FORM  */}
      
      <Box component="form"  onSubmit={formik.handleSubmit}>

        <TextField
          margin="normal"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={Boolean(formik.errors.email) && formik.touched.email}
          helperText={formik.touched.email && formik.errors.email}
          required
          fullWidth
          label="Email"
          name="email"
        />
        
         {/* password */}

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

        {/* checkbox  */}

        <div className="mt-4 flex flex-col gap-4">

          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={handleChecked} value="remember" color="success" />
            }
            label="Remember me"
          />

          <Button
            variant="contained"
            type="submit"
            color="success"
            size="large">Sign in</Button>

        </div>
      </Box>

      {/* navegation  */}

      <Nav>

        <Link to="/NewAccount" className="border-b-2 pb-2 border-black hover:text-lime-600">
          You dont have an account?
        </Link>

        <Link to="/Forgot-Password" className="border-b-2 pb-2 border-black hover:text-lime-600">
          Forgot my password
        </Link>

      </Nav>
    </>
  )
}
