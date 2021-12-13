export default interface IForm2 {
  minHeight: string | number;
  isLoading: boolean;
  setIsLoading: (value: boolean) => any;
  onScopeChange: (scope: number, payload: any) => any;
  onCheck: (params?: any) => any;
}
