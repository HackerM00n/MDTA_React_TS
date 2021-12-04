import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";

import PagePart from "./components/PagePart";
import Form from "./components/Form";
import BestOption from "./components/BestOption";
import Constants from "values";
import { calculateBestOption } from "api";

function Lab1({
  isLoading,
  setIsLoading,
}: {
  isLoading: boolean;
  setIsLoading: (value: boolean) => any;
}) {
  const [bestOption, setBestOption] = useState<string>("");
  const [windowHeight, setWindowHeight] = useState<number>(window.innerHeight);

  useEffect(() => {
    document.title = Constants.LABELS.productionModel;

    const updateWindowHeight = (): void => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", updateWindowHeight);
    return () => window.removeEventListener("resize", updateWindowHeight);
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
        <PagePart windowHeight={windowHeight}>
          <Form
            onSubmit={onCaclulate}
            onSwitch={onFormSwitch}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            minHeight={minHeight}
          />
        </PagePart>
        <PagePart windowHeight={windowHeight}>
          <BestOption bestOption={bestOption} minHeight={minHeight} />
        </PagePart>
      </Grid>
    </>
  );
}

export default Lab1;
