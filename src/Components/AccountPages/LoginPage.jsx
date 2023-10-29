import { Form, useActionData } from "react-router-dom";
import classes from "./LoginPage.module.css";
import { Grid, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { sliceActions } from "../../Store/StoreSlice";
import { useEffect } from "react";

const LoginPage = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const action_data = useActionData();

  useEffect(() => {
    if (action_data) {
      if (action_data.status === "success") {
        dispatch(sliceActions.set_token_to_localStorage(action_data));
      }
    }
  }, [action_data]);
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
              <Form method="POST" action="/user-details">
                <label htmlFor="email">User Email</label>
                <br />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="@example.com"
                />
                <br />
                <label htmlFor="password">User Password</label>
                <br />
                <input type="password" id="password" name="password" />
                <br />
                <Button
                  type="submit"
                  variant="outlined"
                  name="intent"
                  value="login"
                >
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
