export default interface IForm1 {
  minHeight: string | number;
  isLoading: boolean;
  setIsLoading: (value: boolean) => any;
  onSubmit: (type: number, payload: any) => any;
  onScopeChange: (scope: number, payload: any) => any;
}
