import classes from "./IssueThreadComponent.module.css";
import { Box, Container, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SolutionModal from "../WholePages/SolutionModal";

const IssueThreadComponent = () => {
  const Navigate = useNavigate();
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
                  Navigate("/issues/issue-details");
                }}
              >
                <h3>Water Leakage near my home</h3>
                <h4>Chhattisgarh, Bilaspur</h4>
              </Box>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Box
                className={classes.issueText}
                onClick={() => {
                  Navigate("/issues/issue-details");
                }}
              >
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum
                </p>
              </Box>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Box className={classes.btn}>
                <SolutionModal />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default IssueThreadComponent;
