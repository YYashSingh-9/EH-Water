import classes from "./User.module.css";
import LogoutIcon from "@mui/icons-material/Logout";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Grid, Button } from "@mui/material";
import ProfileThreadComponent from "../ChildComponents/ProfileThreadComponent";
import { useNavigate } from "react-router-dom";
const UserPage = () => {
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

export default UserPage;
