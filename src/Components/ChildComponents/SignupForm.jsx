import { Form } from "react-router-dom";
import { Button } from "@mui/material";
const SignUpForm = () => {
  return (
    <>
      <Form method="POST">
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
        <label htmlFor="confirmpassword">Confirm Password</label>
        <br />
        <input
          type="confirmpassword"
          name="confirmpassword"
          id="confirmpassword"
        />
        <br />
        <Button type="submit" variant="outlined" name="intent" value="signup">
          SignUp
        </Button>
      </Form>
    </>
  );
};

export default SignUpForm;
