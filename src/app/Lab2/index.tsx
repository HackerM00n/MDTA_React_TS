import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";

import PageHalf from "app/components/PageHalf";
import Form from "./components/Form";
import DiagramLayers from "./components/DiagramLayers";
import IDiagram from "types/IDiagram";
import ILab from "types/ILab";
import Constants from "values";
import { getDiagramImage } from "api";

function Lab2({ isLoading, setIsLoading, windowHeight }: ILab) {
  const [diagrams, setDiagrams] = useState<IDiagram[]>([]);

  useEffect(() => {
    document.title = Constants.LABELS.semanticWeb;
  }, []);

  const minHeight = "50%";

  const onScopeChange = (scope: number, types: number[]) => {
    setDiagrams(types.map((type) => getDiagramImage(scope, type)));
  };

  const onCheck = ({
    scope,
    type,
    isChecked,
  }: {
    scope: number;
    type: number;
    isChecked: boolean;
  }) => {
    setDiagrams(
      isChecked
        ? [getDiagramImage(scope, type), ...diagrams]
        : diagrams.filter((diagram) => diagram.type !== type)
    );
  };

  return (
    <Grid container spacing={2}>
      <PageHalf windowHeight={windowHeight} xs={4}>
        <Form
          minHeight={minHeight}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          onCheck={onCheck}
          onScopeChange={onScopeChange}
        />
      </PageHalf>
      <PageHalf windowHeight={windowHeight} xs={8}>
        <DiagramLayers diagrams={diagrams} />
      </PageHalf>
    </Grid>
  );
}

export default Lab2;
