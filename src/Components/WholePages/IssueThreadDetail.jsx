import { Grid, Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import classes from "./IssueThreadDetails.module.css";
import SolutionThreadComponent from "../ChildComponents/SolutionThreadComponent";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const IssueThreadDetail_Page = () => {
  const allIssues = useSelector((state) => state.firstSlice.allIssues);
  const { id } = useParams();

  const issueGott = allIssues.filter((el) => {
    return el._id === id;
  });
  const issueGot = issueGott[0];
  console.log(issueGot);
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
              <h3>{issueGot.title}</h3>
              <h4>{`${issueGot.state},${issueGot.city}`}</h4>
              <h4>
                This issue is raised by -
                <span className={classes.namespan}>{issueGot.userName}</span>
              </h4>
            </Box>
            <Box className={classes.issueText}>
              <p>{issueGot.details}</p>
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
