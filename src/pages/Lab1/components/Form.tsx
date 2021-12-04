import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";

import { getProperties } from "api";
import IProperty from "types/IProperty";
import IForm from "types/IForm";
import Constants from "values";

function Form({
  isLoading,
  minHeight,
  onSubmit,
  onSwitch,
  setIsLoading,
}: IForm) {
  const [type, setType] = useState<number>();
  const [props, setProps] = useState<IProperty[]>([]);
  const [state, setState] = useState<any>({});

  const handleCheckbox = (event: any) => {
    setState({
      ...state,
      [event.target.value]: event.target.checked,
    });
  };

  const handleSelect = async (event: any) => {
    const { value } = event.target;

    setIsLoading(true);

    const _props = await getProperties(value);

    setState({});
    setType(value);
    setProps(_props);
    setIsLoading(false);
    onSwitch();
  };

  const onCaclucate = () => {
    const keys = [];

    for (let key in state) {
      if (state[key]) keys.push(key);
    }

    if (keys.length && type && onSubmit) onSubmit(type, keys);
  };

  return (
    <>
      <FormControl
        component="fieldset"
        variant="standard"
        style={{
          width: "80%",
          ...(minHeight && { minHeight }),
        }}
      >
        <FormGroup>
          <InputLabel id="scope-label">{Constants.LABELS.scope}</InputLabel>
          <Select
            labelId="scope-label"
            id="scope"
            label={Constants.LABELS.scope}
            onChange={handleSelect}
          >
            <MenuItem value={9}>{Constants.SCOPE_NAMES[9]}</MenuItem>
            <MenuItem value={8}>{Constants.SCOPE_NAMES[8]}</MenuItem>
            <MenuItem value={20}>{Constants.SCOPE_NAMES[20]}</MenuItem>
          </Select>
          {props.map(({id, description}) => (
            <FormControlLabel
              control={<Switch onChange={handleCheckbox} value={id} checked={!!state[id]}/>}
              label={description}
              key={id}
            />
          ))}
          {!!props.length && !isLoading && (
            <Button onClick={onCaclucate} variant="contained">
              {Constants.LABELS.count}
            </Button>
          )}
        </FormGroup>
      </FormControl>
    </>
  );
}

export default Form;
