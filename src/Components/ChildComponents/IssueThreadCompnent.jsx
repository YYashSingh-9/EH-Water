import classes from "./IssueThreadComponent.module.css";
import { Box, Container, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SolutionModal from "../WholePages/SolutionModal";
import { useSelector } from "react-redux";

const IssueThreadComponent = (props) => {
  const userObj = useSelector((state) => state.firstSlice.currentUserObject);
  const cookieTokenVal = useSelector(
    (state) => state.firstSlice.cookieTokenVal
  );
  const Navigate = useNavigate();
  const { city, details, state, title, _id } = props.elem;
  const userId = userObj._id;
  const userName = userObj.name;

  const detailFinal = details.slice(0, 200);
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
              <Box
                className={classes.titleNlocation}
                onClick={() => {
                  Navigate(`/issues/issue-details/${_id}`);
                }}
              >
                <h3>{title}</h3>
                <h4>{`${state},${city}`}</h4>
              </Box>
            </Grid>
            <Grid item lg={12} md={6} sm={6} xs={6}>
              <Box
                className={classes.issueText}
                onClick={() => {
                  Navigate(`/issues/issue-details/${_id}`);
                }}
              >
                <p>{`${detailFinal} ...`}</p>
              </Box>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Box className={classes.btn}>
                <SolutionModal
                  issueId={_id}
                  user={userId}
                  userName={userName}
                  cookie={cookieTokenVal}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default IssueThreadComponent;
