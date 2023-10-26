import classes from "./SignupUser.module.css";
import SignUpForm from "../ChildComponents/SignupForm";
import { Grid, Box } from "@mui/material";
import { redirect, useActionData, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { sliceActions } from "../../Store/StoreSlice";

const SignupUser = () => {
  const Navigate = useNavigate();
  const action_data = useActionData();
  const dispatch = useDispatch();

  useEffect(() => {
    if (action_data) {
      if (action_data.status === "success") {
        dispatch(sliceActions.set_token_to_localStorage(action_data));
        Navigate("/user-details");
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
              <h2>Signup User</h2>
            </Box>
          </Grid>
          <Grid item lg={12} md={12} sm={12}>
            <Box className={classes.loginForm}>
              <SignUpForm />
            </Box>
            <Box
              className={classes.switchTitle}
              onClick={() => {
                Navigate("/login");
              }}
            >
              <h4>Already signedup? Login then.</h4>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default SignupUser;
