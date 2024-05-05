import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "15px",
  boxShadow: 24,
  p: 2,
};

export default function JobDescription(props) {
  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
          className="modal-jd"
          variant="h6"
          component="h2"
          >Job Description</Typography>

          ```Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
quam totam! Deserunt perferendis animi beatae, amet ipsum,
voluptatum obcaecati aliquid vitae, quod ipsam perspiciatis
dolorem qui neque consequatur sequi. Neque.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
quam totam! Deserunt perferendis animi beatae, amet ipsum,
voluptatum obcaecati aliquid vitae, quod ipsam perspiciatis
dolorem qui neque consequatur sequi. Neque.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
quam totam! Deserunt perferendis animi beatae, amet ipsum,
voluptatum obcaecati aliquid vitae, quod ipsam perspiciatis
dolorem qui neque consequatur sequi. Neque.```
        </Box>
      </Modal>
    </div>
  );
}
