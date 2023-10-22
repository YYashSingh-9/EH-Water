import { Grid, Box } from "@mui/material";
import classes from "./IssueThreadDetails.module.css";
import SolutionThreadComponent from "../ChildComponents/SolutionThreadComponent";

const IssueThreadDetail_Page = () => {
  return (
    <>
      <Box className={classes.mainDetailPage}>
        <Grid
          container
          direction={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Grid item lg={12} md={12} sm={12} textAlign={"center"}>
            <Box className={classes.mainIssueInfo}>
              <h3>Water Leakage near my home</h3>
              <h4>Chhattisgarh, Bilaspur</h4>
              <h4>
                This issue is raised by -
                <span className={classes.namespan}> baba blacksheep</span>
              </h4>
            </Box>
            <Box className={classes.issueText}>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </p>
            </Box>
          </Grid>
          <Grid item lg={12} md={12} sm={12}>
            <Box className={classes.solutionsParentDiv}>
              <h2>Provided Solutions</h2>
              <Box className={classes.solutionsChildDiv}>
                <SolutionThreadComponent />
                <SolutionThreadComponent />
                <SolutionThreadComponent />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default IssueThreadDetail_Page;
