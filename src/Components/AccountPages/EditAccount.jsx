import { Form } from "react-router-dom";
import classes from "./EditAccount.module.css";
import { Box, Button, Grid } from "@mui/material";
import { useRef } from "react";
import { useState } from "react";
const EditAccount = () => {
  const ref = useRef();
  const nameref = useRef();
  const [emailInpState, SetEmailInpState] = useState("");
  const [nameInpState, SetnameInpState] = useState("");

  const onchangeemail = () => {
    const emailVal = ref.current.value;
    SetEmailInpState(emailVal);
    console.log(emailInpState);
  };
  const onchangeName = () => {
    const nameVal = nameref.current.value;
    SetnameInpState(nameVal);
    console.log(nameInpState);
  };
  const emaiSubmitHandler = () => {};
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
                  ref={nameref}
                  value={nameInpState}
                  onChange={onchangeName}
                />
                <br />
                <label htmlFor="email">User Email</label>
                <br />
                <input
                  type="email"
                  id="email"
                  ref={ref}
                  value={emailInpState}
                  onChange={onchangeemail}
                />
                <br />
                <Button type="submit" variant="outlined">
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
