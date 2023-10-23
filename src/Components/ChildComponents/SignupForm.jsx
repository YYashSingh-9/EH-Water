import classes from "./SignupForm.module.css";
import { Form } from "react-router-dom";
import { Button } from "@mui/material";

const SignUpForm = () => {
  return (
    <>
      <Form>
        <label htmlFor="name">User Name</label>
        <br />
        <input
          type="name"
          id="name"
          name="name"
          placeholder="ex-Yashwardhanm Singh"
        />
        <br />
        <label htmlFor="email">User Email</label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="@example.com"
        />
        <br />
        <label htmlFor="password">User Password</label>
        <br />
        <input type="password" name="password" id="password" />
        <br />
        <Button type="submit" variant="outlined">
          Login
        </Button>
      </Form>
    </>
  );
};

export default SignUpForm;
