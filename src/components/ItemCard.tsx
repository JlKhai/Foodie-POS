import { Box, Paper, Typography } from "@mui/material";
import React, { ReactNode } from "react";

interface Props {
  title: string;
  icon: ReactNode;
  href?: string;
  subtitle?: string;
}

const ItemCard = ({ title, icon, href, subtitle }: Props) => {
  if (href) {
    return (
      <Paper
        elevation={2}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: 170,
          height: 170,
          p: 2,
          mt: 2,
          userSelect: "none",
        }}
      >
        {icon}
        <Typography sx={{ fontWeight: "700", color: "#4C4C6D" }}>
          {title}
        </Typography>
        {subtitle && (
          <Typography sx={{ fontSize: 14, color: "#4C4C6D" }}>
            {subtitle}
          </Typography>
        )}
      </Paper>
    );
  }
  return (
    <Paper
      elevation={2}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: 170,
        height: 170,
        p: 2,
        m: 2,
      }}
    >
      {icon}
      <Typography sx={{ fontWeight: "700", color: "#4C4C6D" }}>
        {title}
      </Typography>
      {subtitle && (
        <Typography sx={{ fontSize: 14, color: "#4C4C6D" }}>
          {subtitle}
        </Typography>
      )}
    </Paper>
  );
};

export default ItemCard;
