import classes from "./FormMain.module.css";
import Button from "@mui/material/Button";
import { Form } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sliceActions } from "../../Store/StoreSlice";

const FormMain = () => {
  const cookieTokenVal = useSelector(
    (state) => state.firstSlice.cookieTokenVal
  );
  const currentUser = useSelector(
    (state) => state.firstSlice.currentUserObject
  );
  const titleInput = useSelector((state) => state.firstSlice.titleInput);
  const cityInput = useSelector((state) => state.firstSlice.cityInput);
  const issueDetails = useSelector((state) => state.issueDetails);
  const dispatch = useDispatch();

  const fieldClearHandle = () => {
    dispatch(sliceActions.fieldClear());
  };
  console.log(cookieTokenVal);
  return (
    <>
      <Form method="POST" className={classes.inputForm}>
        <label htmlFor="issue_input">Title of your issue</label>
        <br />
        <input
          type="text"
          placeholder="Is it water shortage?"
          id="issue_input"
          name="title"
          defaultValue={titleInput}
        />
        <br />
        <label htmlFor="state_selection">Where problem occured</label>
        <br />
        <select id="state_selection" placeholder="select state" name="state">
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
        <input
          type="text"
          id="city"
          placeholder="ex-Bilaspur"
          name="city"
          defaultValue={cityInput}
        />
        <br />
        <label type="root_problem" />
        <br />
        <textarea
          defaultValue={issueDetails}
          name="details"
          id="root_problem"
          placeholder="Please explain issue in details and */ don't use foul language/abusive word or mocking."
        />
        <br />
        <Button
          type="submit"
          variant="contained"
          name="intent"
          value={cookieTokenVal}
          onClick={fieldClearHandle}
        >
          Share Now
        </Button>
      </Form>
    </>
  );
};

export default FormMain;
