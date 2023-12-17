import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "@/store/hook";
import { Location } from "@prisma/client";

const SettigsPage = () => {
  const [seletedLocation, setSeletedLocation] = useState<Location>();
  const locations = useAppSelector((state) => state.location.items);

  useEffect(() => {
    const locationId = localStorage.getItem("seletedLocationId");
    if (locationId) {
      const seletedLocation = locations.find(
        (item) => item.id === Number(locationId)
      );
      setSeletedLocation(seletedLocation);
    } else {
      const firstLocation = locations[0];
      setSeletedLocation(firstLocation);
      localStorage.getItem("seletedLocationId");
    }
  }, [locations]);

  const handleLocationChange = (e: SelectChangeEvent<number>) => {
    const seletedLocation = locations.find(
      (item) => item.id === e.target.value
    );
    if (seletedLocation) {
      setSeletedLocation(seletedLocation);
      localStorage.setItem("seletedLocationId", String(seletedLocation.id));
    }
  };

  if (!seletedLocation) return null;

  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel>Location</InputLabel>
        <Select
          label="location"
          value={seletedLocation?.id}
          onChange={handleLocationChange}
        >
          {locations.map((item) => (
            <MenuItem key={item.id} value={item.id}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SettigsPage;
