import IFrameResult from "./IFrameResult";

export default interface FrameResultsSelect {
  results: IFrameResult[];
  onChange: (event: any) => any;
}
