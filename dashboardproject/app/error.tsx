"use client";
import { Alert, Box, Button } from "@mui/material";

export default function Error({error,reset}: {error: Error;reset: () => void}) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <Alert severity="error">{error.message}</Alert>
      <Button onClick={reset} variant="contained" sx={{ mt: 2 }}>
        تلاش مجدد
      </Button>
    </Box>
  );
}
