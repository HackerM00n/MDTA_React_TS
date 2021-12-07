import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

import ICheckboxes from "types/ICheckboxes";

function Checkboxes({ checkboxes, state, onChange }: ICheckboxes) {
  return (
    <>
      {checkboxes.map(({ id, description }) => (
        <FormControlLabel
          control={
            <Switch
              onChange={onChange}
              value={id}
              {...(state && { checked: !!state[id] })}
            />
          }
          label={description}
          key={id}
        />
      ))}
    </>
  );
}

export default Checkboxes;
