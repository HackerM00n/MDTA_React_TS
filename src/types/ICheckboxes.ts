import ICheckbox from "./ICheckbox";

export default interface ICheckboxes {
    checkboxes: ICheckbox[];
    state?: any;
    onChange: (event: any) => any;
}