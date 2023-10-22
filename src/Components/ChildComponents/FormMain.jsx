import classes from "./FormMain.module.css";
import Button from "@mui/material/Button";
import { Form } from "react-router-dom";
const FormMain = () => {
  return (
    <>
      <Form className={classes.inputForm}>
        <label htmlFor="issue_input">Title of your issue</label>
        <br />
        <input
          type="text"
          placeholder="Is it water shortage?"
          id="issue_input"
        />
        <br />
        <label htmlFor="state_selection">Where problem occured</label>
        <br />
        <select id="state_selection" placeholder="select state">
          <option value="Andhra Pradesh">Andhra Pradesh</option>
          <option value="Arunachal Pradesh">Arunachal Pradesh</option>
          <option value="Assam">Assam</option>
          <option value="Andaman and Nicobar Islands">
            Andaman and Nicobar Islands
          </option>
          <option value="Bihar">Bihar</option>
          <option value="Chhattisgarh">Chhattisgarh</option>
          <option value="Chandigarh">Chandigarh</option>
          <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
          <option value="Daman and Diu">Daman and Diu</option>
          <option value="Delhi">Delhi</option>
          <option value="Goa">Goa</option>
          <option value="Gujarat">Gujarat</option>
          <option value="Haryana">Haryana</option>
          <option value="Himachal Pradesh	">Himachal Pradesh </option>
          <option value="Jammu and Kashmir">Jammu and Kashmir</option>
          <option value="Jharkhand">Jharkhand</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Kerala">Kerala</option>
          <option value="Ladakh ">Ladakh </option>
          <option value="Lakshadweep">Lakshadweep</option>
          <option value="Madhya Pradesh">Madhya Pradesh</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="Manipur">Manipur</option>
          <option value="Meghalaya">Meghalaya</option>
          <option value="Mizoram">Mizoram</option>
          <option value="Nagaland">Nagaland</option>
          <option value="Odisha">Odisha</option>
          <option value="Puducherry">Puducherry</option>
          <option value="Punjab">Punjab</option>
          <option value="Rajasthan">Rajasthan</option>
          <option value="Sikkim">Sikkim</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
          <option value="Telangana">Telangana</option>
          <option value="Tripura">Tripura</option>
          <option value="Uttar Pradesh">Uttar Pradesh</option>
          <option value="Uttarakhand">Uttarakhand</option>
          <option value="West Bengal">West Bengal</option>
        </select>
        <br />
        <label htmlFor="city">Enter your city</label>
        <br />
        <input type="text" id="city" />
        <br />
        <label type="root_problem" />
        <br />
        <textarea id="root_problem" placeholder="What's the issue" />
        <br />
        <Button type="submit" variant="contained">
          Share Now
        </Button>
      </Form>
    </>
  );
};

export default FormMain;
