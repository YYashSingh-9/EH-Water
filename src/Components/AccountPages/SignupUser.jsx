import classes from "./SignupUser.module.css";
import SignUpForm from "../ChildComponents/SignupForm";
import { Grid, Box, Button } from "@mui/material";
const SignupUser = () => {
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
              <h2>Signup User</h2>
            </Box>
          </Grid>
          <Grid item lg={12} md={12} sm={12}>
            <Box className={classes.loginForm}>
              <SignUpForm />
            </Box>
            <Box className={classes.switchTitle}>
              <h4>Already signedup? Login then.</h4>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default SignupUser;
