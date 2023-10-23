import classes from "./User.module.css";
import { Box, Grid } from "@mui/material";
import ProfileThreadComponent from "../ChildComponents/ProfileThreadComponent";
const UserPage = () => {
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
              <h2>Profile of Yash</h2>
              <h3>@yash</h3>
              <h4>Issues/Solutions</h4>
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

export default UserPage;
