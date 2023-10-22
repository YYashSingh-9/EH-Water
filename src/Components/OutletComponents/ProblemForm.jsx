import classes from "./ProblemForm.module.css";
import { Grid, Box } from "@mui/material";
import FormMain from "../ChildComponents/FormMain";
import StarsIcon from "@mui/icons-material/Stars";
const ProblemForm = () => {
  return (
    <>
      <Box>
        <Box className={classes.formMain}>
          <Grid
            container
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Grid
              item
              lg={12}
              md={12}
              sm={12}
              xs={12}
              textAlign={"center"}
              sx={{ maxHeight: "5rem" }}
            >
              <Box className={classes.title}>
                <h2>Home</h2>
              </Box>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <FormMain />
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Box className={classes.impNote}>
                <StarsIcon sx={{ color: "#1778F2", fontSize: 30 }} />
                <span className={classes.impNoteSpan}>
                  <h3>
                    This app is to help people raise their water issue with the
                    world..
                  </h3>
                  <h4>
                    Share your problem, listen to other's problem and if
                    possible help them with a solution by clicking give solution
                    button{" "}
                  </h4>
                  <h5>
                    If You like this app and idea then you can contribute in
                    this app by clicking here.
                  </h5>
                </span>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default ProblemForm;
