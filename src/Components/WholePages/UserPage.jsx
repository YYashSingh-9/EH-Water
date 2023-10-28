import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { sliceActions } from "../../Store/StoreSlice";
import { LogoutHandler, getAllUserPosts } from "../../Store/AsyncFuntions";
import { Box, Grid, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useActionData, useNavigate } from "react-router-dom";
import ProfileThreadComponent from "../ChildComponents/ProfileThreadComponent";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginPage from "../AccountPages/LoginPage";
import EditIcon from "@mui/icons-material/Edit";
import classes from "./User.module.css";

const WhenLoggedIn = () => {
  const cookieTokenVal = useSelector(
    (state) => state.firstSlice.cookieTokenVal
  );
  const currentUser = useSelector(
    (state) => state.firstSlice.currentUserObject
  );
  const allPosts = useSelector((state) => state.firstSlice.allPosts);
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: () => {
      dispatch(sliceActions.logout_cookie_remover());
      return LogoutHandler(cookieTokenVal);
    },
  });
  const userName = currentUser.name;
  const atName = currentUser.name.toString().toLowerCase();

  const logoutFunction = () => {
    mutate();
  };

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
                <h2>Profile of {userName}</h2>
                <h3>@{atName}</h3>
                <h4>Issues/Solutions</h4>
              </Box>
              <Box className={classes.btnSection}>
                <Button
                  variant="outlined"
                  endIcon={<LogoutIcon />}
                  onClick={logoutFunction}
                >
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
            {allPosts.length > 1 ? (
              <Box className={classes.solutionsDiv}>
                <ProfileThreadComponent />
                <ProfileThreadComponent />
              </Box>
            ) : (
              <p>No posts yet</p>
            )}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

const UserPage = () => {
  const loggedInState = useSelector((state) => state.firstSlice.loginState);
  const cookieTokenVal = useSelector(
    (state) => state.firstSlice.cookieTokenVal
  );
  const dispatch = useDispatch();
  const action_data = useActionData();
  const { data } = useQuery({
    queryKey: ["all-posts"],
    queryFn: () => {
      return getAllUserPosts(cookieTokenVal);
    },
  });

  useEffect(() => {
    dispatch(sliceActions.get_token_from_localStorage());
    if (action_data || data) {
      if (action_data.status === "success") {
        dispatch(sliceActions.set_token_to_localStorage(action_data));
      }
      if (data.status === "success") {
        dispatch(sliceActions.gettingAllPosts(data.data));
      }
    }
  }, [action_data]);
  return <>{loggedInState ? <WhenLoggedIn /> : <LoginPage />}</>;
};

export default UserPage;
