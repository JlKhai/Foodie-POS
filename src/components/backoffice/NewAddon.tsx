import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewAddon = ({ open, setOpen }: Props) => {
  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>New Addons</DialogTitle>
      <DialogContent>
        <DialogContentText>CreateNew addons</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={() => setOpen(false)}>
          Cancle
        </Button>
        <Button variant="contained">Confirm</Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewAddon;
