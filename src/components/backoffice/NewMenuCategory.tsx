import { useAppDispatch } from "@/store/hook";
import { createMenuCategory } from "@/store/slices/menuCategorySlice";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewMenuCategory = ({ open, setOpen }: Props) => {
  const [name, setName] = useState("");
  const dispatch = useAppDispatch();

  const handleCreateMenuCategory = () => {
    const seletedLocationId = localStorage.getItem("seletedLocationId");
    dispatch(
      createMenuCategory({
        name,
        locationId: Number(seletedLocationId),
        onSuccess: () => setOpen(false),
      })
    );
  };
  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle id="alert-dialog-title">
        Create New Menu Category{" "}
      </DialogTitle>
      <DialogContent sx={{ width: 300 }}>
        <Box sx={{ mt: 1 }}>
          <TextField
            autoFocus
            label="Name"
            onChange={(e) => setName(e.target.value)}
            sx={{ width: "100%" }}
          />
        </Box>
      </DialogContent>
      <DialogActions sx={{ pr: 3 }}>
        <Button variant="contained" onClick={() => setOpen(false)}>
          Cancle
        </Button>
        <Button
          disabled={!name}
          variant="contained"
          onClick={handleCreateMenuCategory}
          autoFocus
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewMenuCategory;
