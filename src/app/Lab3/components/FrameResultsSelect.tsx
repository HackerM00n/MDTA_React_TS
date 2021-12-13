import IFrameResultsSelect from "types/IFrameResultsSelect";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";

function FrameResultsSelect({ results, onChange }: IFrameResultsSelect) {
  return (
    <>
      <RadioGroup
        aria-label="gender"
        defaultValue="female"
        name="radio-buttons-group"
        onChange={onChange}
      >
        {results.map((result) => (
          <FormControlLabel
            key={result.option}
            value={result.option}
            control={<Radio />}
            label={result.name}
          />
        ))}
      </RadioGroup>
    </>
  );
}

export default FrameResultsSelect;
