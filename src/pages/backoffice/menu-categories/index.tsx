import NewMenuCategory from "@/components/backoffice/NewMenuCategory";
import { useAppSelector } from "@/store/hook";
import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";

const MenuCategoriesPage = () => {
  const [open, setOpen] = useState(false);
  const menuCategories = useAppSelector((state) => state.menuCategory.items);
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button variant="contained" onClick={() => setOpen(true)}>
          New MenuCategory
        </Button>
      </Box>

      {menuCategories.map((item) => (
        <Typography>{item.name}</Typography>
      ))}
      <NewMenuCategory open={open} setOpen={setOpen} />
    </Box>
  );
};

export default MenuCategoriesPage;
