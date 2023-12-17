import NewAddonCategory from "@/components/backoffice/NewAddonCategory";
import { useAppSelector } from "@/store/hook";
import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";

const AddonsCategoriesPage = () => {
  const [open, setOpen] = useState(false);

  const addonsCategories = useAppSelector((state) => state.addonCategory.items);
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button variant="contained" onClick={() => setOpen(true)}>
          New AddonsCategory
        </Button>
      </Box>
      {addonsCategories.map((item) => (
        <Typography key={item.id}>{item.name}</Typography>
      ))}
      <NewAddonCategory open={open} setOpen={setOpen} />
    </Box>
  );
};

export default AddonsCategoriesPage;
