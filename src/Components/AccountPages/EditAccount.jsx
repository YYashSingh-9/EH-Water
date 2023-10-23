import { Form } from "react-router-dom";
import classes from "./EditAccount.module.css";
import { Box, Button, Grid } from "@mui/material";
import ButtonCom from "../ChildComponents/ButtonCom";

const EditAccount = () => {
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
                <input type="string" name="name" id="name" />
                <br />
                <label htmlFor="email">User Email</label>
                <br />
                <input type="email" id="email" name="email" />
                <br />
                <ButtonCom title="Change Now" type="submit">
                  Change Now
                </ButtonCom>
              </Form>
            </Box>
          </Grid>
          <Grid item lg={12} md={12} sm={12}>
            <Box className={classes.pwForm}>
              <Form>
                <label htmlFor="passwordchange">New Password</label>
                <br />
                <input type="text" name="passwordchange" id="passwordchange" />
                <br />
                <label htmlFor="passwordconfirm">Confirm Password </label>
                <br />
                <input
                  type="password"
                  name="passwordconfirm"
                  id="passwordconfirm"
                />
                <br />
                <ButtonCom title="Change Now" type="submit">
                  Change Now
                </ButtonCom>
              </Form>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default EditAccount;
