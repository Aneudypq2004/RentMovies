import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { TextField, Stack, Button} from "@mui/material";

import { ChangePasswordSchema } from "../../libs/schemas";
import Nav from "../../components/LoginArea/Nav";
import Title from "../../components/LoginArea/Title";

function ChangePassword() {

    const formik = useFormik({

        initialValues: {
            
          password: "",
          repeatPassword: "",
         
        },
    
        validationSchema: ChangePasswordSchema,
    
        onSubmit: (values) => {
    
          console.log(values)
    
    
        }
      });
  return (
    <>
    <form onSubmit={formik.handleSubmit}>

      <fieldset>

        <Title title="Change your password" />

        <Stack spacing={4}>

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
            size="large">Change</Button>

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

export default ChangePassword