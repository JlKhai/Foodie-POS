import NewMenu from "@/components/backoffice/NewMenu";
import { useAppSelector } from "@/store/hook";
import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";

const MenusPage = () => {
  const [open, setOpen] = useState(false);
  const menus = useAppSelector((state) => state.menu.items);
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button variant="contained" onClick={() => setOpen(true)}>
          New Menu
        </Button>
      </Box>
      {menus.map((item) => (
        <Typography key={item.id}>{item.name}</Typography>
      ))}
      <NewMenu open={open} setOpen={setOpen} />
    </Box>
  );
};

export default MenusPage;
