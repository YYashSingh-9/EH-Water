import classes from "./ProblemForm.module.css";
import { Grid, Box } from "@mui/material";
import FormMain from "../ChildComponents/FormMain";

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
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <FormMain />
            </Grid>
            <Grid item>
              <h1>ahha</h1>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default ProblemForm;
