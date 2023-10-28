import { useSelector } from "react-redux";
import classes from "./ProfileThreadComponent.module.css";
import { Box, Container, Grid } from "@mui/material";

const ProfileThreadComponent = (props) => {
  const userObj = useSelector((state) => state.firstSlice.currentUserObject);

  const elems = props.elem;

  const title = elems.city
    ? `Issue by ${userObj.name}`
    : `Solution by ${userObj.name}`;
  return (
    <>
      <Container maxWidth="lg">
        <Box className={classes.issueComponent}>
          <Grid
            container
            direction={"column"}
            alignItems={"center"}
            justifyItems={"center"}
          >
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Box className={classes.titleNlocation}>
                <h3>{title}</h3>
              </Box>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Box className={classes.issueText}>
                <p>{elems.details}</p>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default ProfileThreadComponent;
