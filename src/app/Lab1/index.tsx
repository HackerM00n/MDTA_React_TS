import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";

import PageHalf from "../components/PageHalf";
import Form from "./components/Form";
import BestOption from "./components/BestOption";
import ILab from "types/ILab";
import Constants from "values";
import { calculateBestOption } from "api";

function Lab1({ isLoading, setIsLoading, windowHeight }: ILab) {
  const [bestOption, setBestOption] = useState<string>("");

  useEffect(() => {
    document.title = Constants.LABELS.productionModel;
  }, []);

  const onCaclulate = async (type: number, keys: number[]) => {
    setIsLoading(true);

    const bestOption = await calculateBestOption(type, keys);

    setBestOption(bestOption || Constants.LABELS.notFound);

    setIsLoading(false);
  };

  const onFormSwitch = () => setBestOption("");

  const minHeight = "50%";

  return (
    <>
      <Grid container spacing={2}>
        <PageHalf windowHeight={windowHeight}>
          <Form
            onSubmit={onCaclulate}
            onScopeChange={onFormSwitch}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            minHeight={minHeight}
          />
        </PageHalf>
        <PageHalf windowHeight={windowHeight}>
          <BestOption bestOption={bestOption} minHeight={minHeight} />
        </PageHalf>
      </Grid>
    </>
  );
}

export default Lab1;
