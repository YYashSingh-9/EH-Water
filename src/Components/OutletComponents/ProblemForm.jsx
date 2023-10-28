import classes from "./ProblemForm.module.css";
import { Grid, Box } from "@mui/material";
import { ContributionModal } from "../WholePages/SolutionModal";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useActionData, useNavigate } from "react-router-dom";
import { sliceActions } from "../../Store/StoreSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormMain from "../ChildComponents/FormMain";
import StarsIcon from "@mui/icons-material/Stars";

const notifyFn = () => {
  return toast("Water Issue Shared👍", {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

const ProblemForm = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const actionData = useActionData();

  useEffect(() => {
    dispatch(sliceActions.get_token_from_localStorage());
    if (actionData) {
      if (actionData.status === "Success") {
        notifyFn();
        setTimeout(() => {
          Navigate("/issues");
        }, 2600);
      }
    }
  }, [actionData]);
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
                  <ContributionModal />
                </span>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <ToastContainer />
      </Box>
    </>
  );
};

export default ProblemForm;
