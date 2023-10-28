import { Grid, Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import classes from "./IssueThreadDetails.module.css";
import SolutionThreadComponent from "../ChildComponents/SolutionThreadComponent";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getIssueSolutions } from "../../Store/AsyncFuntions";
import { useEffect } from "react";
import { sliceActions } from "../../Store/StoreSlice";

const IssueThreadDetail_Page = () => {
  const allIssues = useSelector((state) => state.firstSlice.allIssues);
  const allReviews = useSelector((state) => state.firstSlice.allReviews);
  const dispatch = useDispatch();
  const { id } = useParams();

  const issueGott = allIssues.filter((el) => {
    return el._id === id;
  });
  const issueGot = issueGott[0];

  const { data } = useQuery({
    queryKey: ["issue-solutions"],
    queryFn: () => {
      return getIssueSolutions(issueGot._id);
    },
  });

  useEffect(() => {
    if (data) {
      if (data.status === "success") {
        dispatch(sliceActions.gettingAllIssueReview(data.data));
      }
    }
  }, [data]);
  return (
    <>
      {!issueGot ? (
        "loading"
      ) : (
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
                {allReviews.length < 1 ? (
                  <p>No solutions provided yet</p>
                ) : (
                  <Box className={classes.solutionsChildDiv}>
                    {allReviews.map((el) => {
                      return <SolutionThreadComponent elem={el} key={el._id} />;
                    })}
                  </Box>
                )}
              </Box>
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
};

export default IssueThreadDetail_Page;
