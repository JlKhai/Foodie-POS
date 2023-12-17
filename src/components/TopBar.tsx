import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { use } from "react";
import logo from "../assets/logo.png";
import { signOut, useSession } from "next-auth/react";
import { Span } from "next/dist/trace";

const TopBar = () => {
  const { data } = useSession();
  return (
    <Box
      sx={{
        height: 70,
        bgcolor: "success.main",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        px: 2,
      }}
    >
      <Box>
        <Image width={100} src={logo} alt="logo" />
      </Box>
      <Box>
        <Typography variant="h4" color={"secondary.main"}>
          Foodie-Pos
        </Typography>
      </Box>

      {data ? (
        <Box>
          <Button
            variant="contained"
            sx={{ bgcolor: "primary.main" }}
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            Sign Out
          </Button>
        </Box>
      ) : (
        <span />
      )}
    </Box>
  );
};

export default TopBar;
