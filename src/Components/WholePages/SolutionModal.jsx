import BorderColorIcon from "@mui/icons-material/BorderColor";
import classes from "./SolutionModal.module.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

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

const SolutionModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
                className={classes.txtArea}
                placeholder="ex- whatever solution feels right, share it here."
              />
              <Button
                endIcon={<BorderColorIcon />}
                variant="contained"
                onClick={handleClose}
              >
                Post
              </Button>
            </Box>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default SolutionModal;
