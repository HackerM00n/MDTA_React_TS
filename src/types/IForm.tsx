export default interface IForm {
  isLoading: boolean;
  minHeight?: string | number;
  onSubmit: (type: number, payload: any) => any;
  onSwitch: () => any;
  setIsLoading: (value: boolean) => any;
}
