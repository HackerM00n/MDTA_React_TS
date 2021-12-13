import { TextField } from "@mui/material";
import ILog from "types/ILog";

function Log({ value }: ILog) {
  return (
    <TextField
      disabled
      id="outlined-disabled"
      label="Log"
      value={value}
      maxRows={10}
      multiline
      style={{
        width: "80%"
      }}
    />
  );
}

export default Log;
