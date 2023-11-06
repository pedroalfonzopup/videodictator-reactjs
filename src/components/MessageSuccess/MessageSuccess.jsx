import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const MessageSuccess = ({ purchaseID }) => {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity="success">
        Thanks for your purchase, now here is your purcharse ID: {purchaseID}
      </Alert>
    </Stack>
  );
};

export default MessageSuccess;
