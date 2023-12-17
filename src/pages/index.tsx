import { Box, Button, Typography } from "@mui/material";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
export default function Home() {
  const { data } = useSession();
  const router = useRouter();
  // console.log(data);
  if (!data) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "80vh",
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
          Not signed In?
        </Typography>
        <Button
          variant="contained"
          onClick={() => signIn("google", { callbackUrl: "/" })}
        >
          Sign In
        </Button>
      </Box>
    );
  } else {
    // console.log(data);
    router.push("/backoffice/orders");
  }
}
