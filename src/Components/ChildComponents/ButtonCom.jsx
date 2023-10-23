import classes from "./ButtonCom.module.css";

const ButtonCom = (props) => {
  return (
    <>
      <button type={props.type} className={classes.btn}>
        {props.title}
      </button>
    </>
  );
};

export default ButtonCom;
