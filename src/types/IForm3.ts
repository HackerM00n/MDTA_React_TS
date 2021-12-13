import IDiagram from "./IDiagram";
import IFrameResult from "./IFrameResult";

export default interface IForm3 {
  minHeight: string | number;
  isLoading: boolean;
  frameResults: IFrameResult[],
  log: string;
  setIsLoading: (value: boolean) => any;
  onFirstDiagramSelect: (diagram: IDiagram | null) => any;
  onSecondDiagramSelect: (diagram: IDiagram | null, frameResults: IFrameResult[]) => any;
  onThirdDiagramSelect: (diagram: IDiagram | null, log: string) => any;
}
