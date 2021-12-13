import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import InputLabel from "@mui/material/InputLabel";

import Log from "./Log";
import FrameResultsSelect from "./FrameResultsSelect";
import ScopeSelect from "app/components/ScopeSelect";
import Checkboxes from "app/components/Checkboxes";
import ICheckbox from "types/ICheckbox";
import IForm3 from "types/IForm3";
import Constants from "values";
import {
  getProperties,
  calculateBestOption,
  getTask3Diagram,
  getTask3DiagramByOption,
  getTask3DiagramNames,
  getTask3DiagramExactOption,
  getTask3DiagramLog,
} from "api";

function Form({
  minHeight,
  frameResults,
  log,
  onFirstDiagramSelect,
  onSecondDiagramSelect,
  onThirdDiagramSelect,
  setIsLoading,
}: IForm3) {
  const [scope, setScope] = useState<number>();
  const [checkboxes, setCheckboxes] = useState<ICheckbox[]>([]);
  const [checkboxesValues, setCheckboxesValues] = useState<any>({});

  const handleCheckbox = async (event: any) => {
    const newValues = {
      ...checkboxesValues,
      [event.target.value]: event.target.checked,
    };

    setCheckboxesValues(newValues);

    const keys = [];

    for (let key in newValues) {
      if (newValues[key]) keys.push(+key);
    }

    if (!scope) return;

    setIsLoading(true);
    const newBestOption = await calculateBestOption(scope, keys);

    const type = newBestOption?.id;
    if (!type) return onSecondDiagramSelect(null, []);

    const secondDiagram = getTask3DiagramByOption(scope, keys);
    const newFrameResults = await getTask3DiagramNames(scope, keys);

    onSecondDiagramSelect(secondDiagram, newFrameResults);

    setIsLoading(false);
  };

  const handleScope = async (event: any) => {
    const { value } = event.target;

    setIsLoading(true);

    const firstDiagram = getTask3Diagram(value);
    onFirstDiagramSelect(firstDiagram);

    const _checkboxes = await getProperties(value);

    setCheckboxesValues({});
    setScope(value);
    setCheckboxes(_checkboxes);
    setIsLoading(false);
  };

  const handleRadio = async (event: any) => {
    const { value } = event.target;

    if (!scope) return;

    setIsLoading(true);
    const log = await getTask3DiagramLog(scope, value);
    setIsLoading(false);

    onThirdDiagramSelect(getTask3DiagramExactOption(scope, value), log);
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
          {frameResults.length > 0 && (
            <FrameResultsSelect results={frameResults} onChange={handleRadio} />
          )}
          {log.length > 0 && <Log value={log}/>}
        </FormGroup>
      </FormControl>
    </>
  );
}

export default Form;
