import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import Constants from "values";

function App() {
  const route = useLocation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [windowHeight, setWindowHeight] = useState<number>(window.innerHeight);

  useEffect(() => {
    const updateWindowHeight = (): void => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", updateWindowHeight);
    return () => window.removeEventListener("resize", updateWindowHeight);
  }, []);

  const selectTab = (_: any, value: string) => navigate(value);

  const labsProps = {
    isLoading,
    setIsLoading,
    windowHeight,
  };

  return (
    <>
      <LinearProgress
        style={{
          opacity: isLoading ? 100 : 0,
        }}
      />
      <Box sx={{ width: "100%" }}>
        <Tabs value={route.pathname} onChange={selectTab} centered>
          <Tab label={Constants.LABELS.productionModel} value="/" />
          <Tab label={Constants.LABELS.semanticWeb} value="/2" />
          <Tab label={Constants.LABELS.frameModel} value="/3" />
        </Tabs>
      </Box>
      <Routes>
        <Route path={"/"} element={<Lab1 {...labsProps} />} />
        <Route path="/2" element={<Lab2 {...labsProps} />} />
        <Route path="/3" element={<Lab3 {...labsProps} />} />
      </Routes>
    </>
  );
}

export default App;
