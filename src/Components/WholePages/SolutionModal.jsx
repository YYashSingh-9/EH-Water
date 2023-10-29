import BorderColorIcon from "@mui/icons-material/BorderColor";
import classes from "./SolutionModal.module.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import { useMutation } from "@tanstack/react-query";
import { postSolution } from "../../Store/AsyncFuntions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notifyFn = () => {
  return toast("Solution Shared👍", {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  bgcolor: "background.paper",
  border: "none",
  borderRadius: "1rem",
  boxShadow: 24,
  p: 4,
};

const SolutionModal = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const ref = React.useRef();
  const issueId = props.issueId;
  const userId = props.user;
  const userName = props.userName;
  const dataToSend = {
    userId,
    issueId,
    userName,
  };

  const cookie = props.cookie;
  const { mutate } = useMutation({
    mutationFn: (data) => {
      handleClose();
      return postSolution(data, cookie);
    },
  });

  const solutionPostHandler = () => {
    dataToSend.details = ref.current.value;
    notifyFn();
    mutate(dataToSend);
  };
  return (
    <>
      <div>
        <Button onClick={handleOpen} endIcon={<BorderColorIcon />}>
          Give Solution
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Box className={classes.textModal}>
              <textarea
                ref={ref}
                className={classes.txtArea}
                placeholder="ex- whatever solution feels right, share it here."
              />
              <Button
                endIcon={<BorderColorIcon />}
                variant="contained"
                onClick={solutionPostHandler}
              >
                Post
              </Button>
            </Box>
          </Box>
        </Modal>
        <ToastContainer />
      </div>
    </>
  );
};

export const ContributionModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div>
        <Button onClick={handleOpen}>
          <span className={classes.btnTitle}>
            If You like this app and idea then you can contribute in this app by
            clicking here.
          </span>
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Box
              className={classes.textModal}
              sx={{
                color: "rgb(28,28,28)",
                textTransform: "uppercase",
                textAlign: "center",
              }}
            >
              <PersonPinIcon sx={{ fontSize: "5rem" }} />
              <h2>
                If You like this idea also thinks that this should reach out to
                more people and Most Importantly if you believe in this idea and
                the change this can bring then you can spread the word about
                this so that people who need this, get this.
              </h2>
              <Button variant="contained" onClick={handleClose}>
                Close
              </Button>
            </Box>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default SolutionModal;
