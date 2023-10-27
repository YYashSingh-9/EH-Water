import { Form, useActionData } from "react-router-dom";
import classes from "./EditAccount.module.css";
import { Box, Button, Grid } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { sliceActions } from "../../Store/StoreSlice";
import { useEffect } from "react";

const EditAccount = () => {
  const emailInput = useSelector((state) => state.firstSlice.EditEmailInput);
  const nameInput = useSelector((state) => state.firstSlice.EditNameInput);
  const cookieToken = useSelector((state) => state.firstSlice.cookieTokenVal);
  const dispatch = useDispatch();
  const action_data = useActionData();

  useEffect(() => {
    console.log(emailInput, nameInput);
    if (action_data) {
      if (!action_data.token && action_data.data) {
        const obj = {
          data: action_data.data.data,
          status: action_data.status,
        };
        console.log(action_data);
        dispatch(sliceActions.update_token_from_localStorage(obj));
      }
    }
  });
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
              <Form method="POST" action="/user-details">
                <label htmlFor="name">User Name</label>
                <br />
                <input
                  type="string"
                  id="name"
                  name="name"
                  defaultValue={nameInput}
                />
                <br />
                <label htmlFor="email">User Email</label>
                <br />
                <input
                  type="email"
                  id="email"
                  name="email"
                  defaultValue={emailInput}
                />
                <br />
                <Button
                  type="submit"
                  variant="outlined"
                  name="intent"
                  value={cookieToken}
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
