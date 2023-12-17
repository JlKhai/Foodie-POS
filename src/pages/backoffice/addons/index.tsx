import NewAddon from "@/components/backoffice/NewAddon";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { Box, Button, Typography, typographyClasses } from "@mui/material";
import React, { useState } from "react";

const AddonsPage = () => {
  const [open, setOpen] = useState(false);
  const addons = useAppSelector((state) => state.addon.items);
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button onClick={() => setOpen(true)} variant="contained">
          New Addon
        </Button>
      </Box>
      {addons.map((item) => (
        <Typography key={item.id}> {item.name}</Typography>
      ))}
      <NewAddon open={open} setOpen={setOpen} />
    </Box>
  );
};

export default AddonsPage;
