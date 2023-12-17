import NewTable from "@/components/backoffice/NewTable";
import { useAppSelector } from "@/store/hook";
import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";

const TablesPage = () => {
  const [open, setOpen] = useState(false);
  const tables = useAppSelector((state) => state.table.items);
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button variant="contained" onClick={() => setOpen(true)}>
          New Table
        </Button>
      </Box>
      {tables.map((item) => (
        <Typography> {item.name}</Typography>
      ))}
      <NewTable open={open} setOpen={setOpen} />
    </Box>
  );
};

export default TablesPage;
