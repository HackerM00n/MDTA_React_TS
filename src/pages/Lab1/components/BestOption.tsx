import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";

import Constants from "values";
import IBestOption from "types/IBestOption";

const BestOption = ({ bestOption, minHeight }: IBestOption) => {
  return (
    <Paper
      component={Stack}
      variant="outlined"
      direction="column"
      justifyContent="center"
      style={{
        fontSize: 30,
        width: "80%",
        textAlign: "center",
        ...(minHeight && { minHeight }),
      }}
    >
      <div>{bestOption ? Constants.LABELS.bestOption + ":" : "⬅"}</div>
      <div>{bestOption}</div>
    </Paper>
  );
};

export default BestOption;
