import { Grid, Box, Divider } from "@mui/material";
import classes from "./WorldIssuesComponent.module.css";
import SearchBar from "../ChildComponents/SearchBar";
import IssueThreadComponent from "../ChildComponents/IssueThreadCompnent";

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
          <Grid item lg={12} md={12} sm={12} xs={12} textAlign={"center"}>
            <h2>World Issues</h2>
            <SearchBar />
            <Divider sx={{ marginTop: "0.5rem" }} />
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12} textAlign={"center"}>
            <IssueThreadComponent />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default WorldIssuesComponent;
