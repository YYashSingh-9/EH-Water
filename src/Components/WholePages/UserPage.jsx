import ProfileThreadComponent from "../ChildComponents/ProfileThreadComponent";
import { useDispatch, useSelector } from "react-redux";
import { sliceActions } from "../../Store/StoreSlice";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginPage from "../AccountPages/LoginPage";
import { Box, Grid, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useActionData, useNavigate } from "react-router-dom";
import classes from "./User.module.css";
import { useEffect } from "react";

const WhenLoggedIn = () => {
  const Navigate = useNavigate();

  return (
    <>
      <Box className={classes.mainUserDiv}>
        <Grid
          container
          direction={"row"}
          alignItems={"center"}
          justifyContent={"left"}
        >
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Box className={classes.nameDiv}>
              <Box>
                <h2>Profile of Yash</h2>
                <h3>@yash</h3>
                <h4>Issues/Solutions</h4>
              </Box>
              <Box className={classes.btnSection}>
                <Button variant="outlined" endIcon={<LogoutIcon />}>
                  Logout
                </Button>
                <Button
                  variant="outlined"
                  endIcon={<EditIcon />}
                  onClick={() => {
                    Navigate("/user-details/edit-user");
                  }}
                >
                  Edit Profile
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Box className={classes.solutionsDiv}>
              <ProfileThreadComponent />
              <ProfileThreadComponent />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

const UserPage = () => {
  const loggedInState = useSelector((state) => state.firstSlice.loginState);
  const dispatch = useDispatch();
  const action_data = useActionData();

  useEffect(() => {
    dispatch(sliceActions.get_token_from_localStorage());
    if (action_data) {
      if (action_data.status === "success") {
        dispatch(sliceActions.set_token_to_localStorage(action_data));
      }
    }
  }, [action_data]);
  return <>{loggedInState ? <WhenLoggedIn /> : <LoginPage />}</>;
};

export default UserPage;
