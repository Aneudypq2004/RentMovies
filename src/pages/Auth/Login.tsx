import { Alert, Button, Stack} from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik"
import { Link } from "react-router-dom";

// ICONS
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
import Title from "../../components/LoginRouting/Title";
import Nav from "../../components/LoginRouting/Nav";

export default function Login() {
  return (
    <>

      <Formik
        onSubmit={() => {
          console.log("SENDING");
        }}

        initialValues={{
          email: "",
          password: ""
        }}

        validate={() => {

          let errors: { email: String, password: String } = { email: "", password: "" };

          errors.email = "The email is invalid";
          errors.password = "The password is invalid";
          
          return errors;

        }}
      >
        {({ errors }) => (
          <>
            {/* Errors` */}

            <Stack spacing={1} className="my-2 absolute w-ful">

              <ErrorMessage name="email" component={() => (
                <Alert >{errors.email}</Alert>
              )} />

              <ErrorMessage name="password" component={() => (
                <Alert variant="filled" severity="error">{errors.password}</Alert>
              )} />

            </Stack>

            {/* Avatar  */}

            <Form>

              {<Title title={"Welcome"} />}

              <Stack spacing={1}>

                <label className="text-bold uppercase" htmlFor="email">Email</label>

                <div className="w-full flex  border-azure-radiance-800 border p-2">

                  <EmailIcon />

                  <Field
                    type="email"
                    name="email"
                    placeholder="Your email"
                    className="px-4 outline-none bg-transparent w-full"
                  />

                </div>
              </Stack>

              {/* Passowrd */}

              <Stack sx={{ marginTop: "10px", marginBottom: "10px" }} spacing={1}>

                <label className="text-bold uppercase" htmlFor="Password">Password</label>

                <div className="w-full flex  border-azure-radiance-800 border p-2 ">

                  <PasswordIcon />

                  <Field
                    type="password"
                    name="password"
                    placeholder="Your password"
                    className="px-4 outline-none bg-transparent w-full"
                  />

                </div>
              </Stack>

              <Button
                variant="contained"
                type="submit"
                color="success"
                size="large"
                sx={{
                  width: "50%",
                }}
              >Log In</Button>
            </Form>

            {/*  Navegation */}

            <Nav>

              <Link to="/NewAccount" className="border-b-2 pb-2 border-black hover:text-lime-600">
                Create a new account
              </Link>

              <Link to="/Forgot-Password" className="border-b-2 pb-2 border-black hover:text-lime-600">
                Forgot my password
              </Link>
            </Nav>
          </>
        )}
      </Formik>
    </>
  )
}
