import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";

import PageHalf from "app/components/PageHalf";
import Form from "./components/Form";
import Constants from "values";
import DiagramLayers from "app/components/DiagramLayers";
import IFrameResult from "types/IFrameResult";
import IDiagram from "types/IDiagram";
import ILab from "types/ILab";
import Log from "./components/Log";

function Lab3({ isLoading, setIsLoading, windowHeight }: ILab) {
  const [firstDiagram, setFirstDiagram] = useState<IDiagram | null>();
  const [secondDiagram, setSecondDiagram] = useState<IDiagram | null>();
  const [thirdDiagram, setThirdDiagram] = useState<IDiagram | null>();

  const [frameResults, setFrameResults] = useState<IFrameResult[]>([]);

  const [log, setLog] = useState<string>("");

  const diagram = thirdDiagram || secondDiagram || firstDiagram;
  const diagrams = diagram ? [diagram] : [];

  useEffect(() => {
    document.title = Constants.LABELS.frameModel;
  }, []);

  const minHeight = "90%";

  const onFirstDiagramSelect = (diagram: IDiagram | null) => {
    setLog("");
    setThirdDiagram(null);
    setSecondDiagram(null);
    setFirstDiagram(diagram);
    setFrameResults([]);
  }

  const onSecondDiagramSelect = (diagram: IDiagram | null, frameResults: IFrameResult[]) => {
    setLog("");
    setThirdDiagram(null);
    setSecondDiagram(diagram);
    setFrameResults(frameResults);
  }

  const onThirdDiagramSelect = (diagram: IDiagram | null, log: string) => {
    setThirdDiagram(diagram);
    setLog(log);
  }

  return (
    <Grid container spacing={2}>
      <PageHalf windowHeight={windowHeight} xs={4}>
        <Form
          log={log}
          minHeight={minHeight}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          onFirstDiagramSelect={onFirstDiagramSelect}
          onSecondDiagramSelect={onSecondDiagramSelect}
          onThirdDiagramSelect={onThirdDiagramSelect}
          frameResults={frameResults}
        />
      </PageHalf>
      <PageHalf windowHeight={windowHeight} xs={8}>
        <DiagramLayers diagrams={diagrams} height={90}/>
      </PageHalf>
    </Grid>
  );
}

export default Lab3;
