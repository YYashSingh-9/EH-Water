import { Form } from "react-router-dom";
import classes from "./LoginPage.module.css";
import { Grid, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const Navigate = useNavigate();
  return (
    <>
      <Box className={classes.loginBox}>
        <Grid
          container
          direction={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          maxWidth={"100%"}
        >
          <Grid item lg={12} md={12} sm={12}>
            <Box className={classes.title}>
              <h2>User Login</h2>
            </Box>
          </Grid>
          <Grid item lg={12} md={12} sm={12}>
            <Box className={classes.loginForm}>
              <Form>
                <label htmlFor="email">User Email</label>
                <br />
                <input type="email" id="email" placeholder="@example.com" />
                <br />
                <label htmlFor="password">User Password</label>
                <br />
                <input type="password" id="password" />
                <br />
                <Button type="submit" variant="outlined">
                  Login
                </Button>
              </Form>
            </Box>
            <Box
              className={classes.switchTitle}
              onClick={() => {
                Navigate("/signup");
              }}
            >
              <h4>New to EH-Water? SignUp then.</h4>
            </Box>
          </Grid>
          <Grid item lg={12} md={12} sm={12}>
            <Box className={classes.defaultTitle}>
              <h3>You can also use this account details </h3>
              <h4>User Email - yash99@gmail.com</h4>
              <h4>User Password - ys12345</h4>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default LoginPage;
