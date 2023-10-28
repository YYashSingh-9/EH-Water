import { useSelector } from "react-redux";
import classes from "./SolutionThreadComponent.module.css";
import { Box, Container, Grid } from "@mui/material";
const SolutionThreadComponent = (props) => {
  const allReviews = useSelector((state) => state.firstSlice.allReviews);
  const currentUserObject = useSelector(
    (state) => state.firstSlice.currentUserObject
  );
  const { details, userId, issueId, userName } = props.elem;

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
                <h3>Solution by - {userName}</h3>
              </Box>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Box className={classes.issueText}>
                <p>{details}</p>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default SolutionThreadComponent;
