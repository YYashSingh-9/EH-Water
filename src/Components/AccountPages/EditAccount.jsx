import { Form } from "react-router-dom";
import classes from "./EditAccount.module.css";
import { Box, Button, Grid } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { sliceActions } from "../../Store/StoreSlice";
import { useRef } from "react";

const EditAccount = () => {
  const emailInput = useSelector((state) => state.firstSlice.EditEmailInput);
  const nameInput = useSelector((state) => state.firstSlice.EditNameInput);
  const dispatch = useDispatch();
  const emailref = useRef();
  const nameref = useRef();
  const emaiSubmitHandler = () => {
    const nameVal = nameref.current.value;
    const emailVal = emailref.current.value;

    dispatch(
      sliceActions.editValuesSet({
        emailInput: emailVal,
        nameInput: nameVal,
      })
    );
    console.log(nameInput, emailInput);
  };
  return (
    <>
      <Box className={classes.mainEditPage}>
        <Grid
          container
          direction={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Grid item lg={12} md={12} sm={12}>
            <Box className={classes.title}>
              <h2>Edit Profile</h2>
            </Box>
          </Grid>
          <Grid item lg={12} md={12} sm={12}>
            <Box className={classes.editForm}>
              <Form>
                <label htmlFor="name">User Name</label>
                <br />
                <input
                  type="string"
                  id="name"
                  defaultValue={nameInput}
                  ref={emailref}
                />
                <br />
                <label htmlFor="email">User Email</label>
                <br />
                <input
                  type="email"
                  id="email"
                  defaultValue={emailInput}
                  ref={nameref}
                />
                <br />
                <Button
                  type="submit"
                  variant="outlined"
                  onClick={emaiSubmitHandler}
                >
                  Change Now
                </Button>
              </Form>
            </Box>
          </Grid>
          <Grid item lg={12} md={12} sm={12}>
            <Box className={classes.pwForm}>
              <Form>
                <label htmlFor="passwordchange">New Password</label>
                <br />
                <input type="text" id="passwordchange" />
                <br />
                <label htmlFor="passwordconfirm">Confirm Password </label>
                <br />
                <input type="password" id="passwordconfirm" />
                <br />
                <Button type="submit" variant="outlined">
                  Change Now
                </Button>
              </Form>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default EditAccount;
