import { Grid, Box } from "@mui/material";
import classes from "./WorldIssuesComponent.module.css";

const WorldIssuesComponent = () => {
  return (
    <>
      <Box className={classes.issueCompParent}>
        <Grid
          container
          direction={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Grid item lg={12} md={12} sm={12} sx={12}></Grid>
        </Grid>
      </Box>
    </>
  );
};

export default WorldIssuesComponent;
