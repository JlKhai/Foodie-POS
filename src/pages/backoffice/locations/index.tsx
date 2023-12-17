import ItemCard from "@/components/ItemCard";
import NewLocation from "@/components/backoffice/NewLocation";
import { useAppSelector } from "@/store/hook";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import { Box, Button } from "@mui/material";
import React, { useState } from "react";

const LocationsPage = () => {
  const [open, setOpen] = useState(false);
  const locations = useAppSelector((state) => state.location.items);

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
        <Button variant="contained" onClick={() => setOpen(true)}>
          New Location
        </Button>
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {locations.map((item) => {
          return (
            <ItemCard
              key={item.id}
              icon={<LocationOnIcon />}
              title={item.name}
            />
          );
        })}
      </Box>

      <NewLocation open={open} setOpen={setOpen} />
    </Box>
  );
};

export default LocationsPage;
