export default interface IForm {
  minHeight?: string | number;
  isLoading?: boolean;
  setIsLoading: (value: boolean) => any;
  onSubmit?: (type: number, payload: any) => any;
  onScopeChange?: (scope: number, payload: any) => any;
  onCheck?: (params?: any) => any;
}
