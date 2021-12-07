import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";

import IScopeSelect from "types/IScopeSelect";
import Constants from "values";

function ScopeSelect({ onChange }: IScopeSelect) {
  return (
    <>
      <InputLabel id="scope-label">{Constants.LABELS.scope}</InputLabel>
      <Select
        labelId="scope-label"
        id="scope"
        label={Constants.LABELS.scope}
        onChange={onChange}
      >
        <MenuItem value={9}>{Constants.SCOPE_NAMES[9]}</MenuItem>
        <MenuItem value={8}>{Constants.SCOPE_NAMES[8]}</MenuItem>
        <MenuItem value={20}>{Constants.SCOPE_NAMES[20]}</MenuItem>
      </Select>
    </>
  );
}

export default ScopeSelect;
