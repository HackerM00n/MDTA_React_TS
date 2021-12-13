import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";

import ScopeSelect from "app/components/ScopeSelect";
import Checkboxes from "app/components/Checkboxes";
import ICheckbox from "types/ICheckbox";
import IForm1 from "types/IForm1";
import Constants from "values";
import { getProperties } from "api";

function Form({
  isLoading,
  minHeight,
  onSubmit,
  setIsLoading,
}: IForm1) {
  const [scope, setScope] = useState<number>();
  const [checkboxes, setCheckboxes] = useState<ICheckbox[]>([]);
  const [checkboxesValues, setCheckboxesValues] = useState<any>({});

  const handleCheckbox = (event: any) =>
    setCheckboxesValues({
      ...checkboxesValues,
      [event.target.value]: event.target.checked,
    });

  const handleScope = async (event: any) => {
    const { value } = event.target;

    setIsLoading(true);

    const _checkboxes = await getProperties(value);

    setCheckboxesValues({});
    setScope(value);
    setCheckboxes(_checkboxes);
    setIsLoading(false);
  };

  const onCaclucate = () => {
    const keys = [];

    for (let key in checkboxesValues) {
      if (checkboxesValues[key]) keys.push(key);
    }

    if (keys.length && scope && onSubmit) onSubmit(scope, keys);
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
          <ScopeSelect onChange={handleScope} />
          <Checkboxes
            checkboxes={checkboxes}
            state={checkboxesValues}
            onChange={handleCheckbox}
          />
          {!!checkboxes.length && !isLoading && (
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
