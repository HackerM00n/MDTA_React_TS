import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import InputLabel from "@mui/material/InputLabel";

import ScopeSelect from "app/components/ScopeSelect";
import Checkboxes from "app/components/Checkboxes";
import ICheckbox from "types/ICheckbox";
import IForm2 from "types/IForm2";
import Constants from "values";
import { getTypes } from "api";

function Form({ minHeight, setIsLoading, onScopeChange, onCheck }: IForm2) {
  const [scope, setScope] = useState<number>();
  const [checkboxes, setCheckboxes] = useState<ICheckbox[]>([]);
  const [checkboxesValues, setCheckboxesValues] = useState<any>({});

  const handleCheckbox = (event: any) => {
    setCheckboxesValues({
      ...checkboxesValues,
      [event.target.value]: event.target.checked,
    });

    if (onCheck)
      onCheck({
        scope,
        type: +event.target.value,
        isChecked: event.target.checked,
      });
  };

  const checkAll = (scope: number, checkboxes: ICheckbox[]) => {
    const _checkboxesValues: any = {};

    checkboxes.forEach((type) => {
      _checkboxesValues[type.id] = true;
    });

    setCheckboxesValues(_checkboxesValues);
  };

  const handleScope = async (event: any) => {
    const { value } = event.target;

    setIsLoading(true);

    const _checkboxes = await getTypes(value);

    checkAll(value, _checkboxes);
    setCheckboxes(_checkboxes);
    setScope(value);
    setIsLoading(false);

    if (onScopeChange)
      onScopeChange(
        value,
        _checkboxes.map((_) => _.id)
      );
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
        </FormGroup>
      </FormControl>
    </>
  );
}

export default Form;
