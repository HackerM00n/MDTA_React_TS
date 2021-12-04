import { useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import Lab1 from "pages/Lab1";
import Lab2 from "pages/Lab2";
import Lab3 from "pages/Lab3";
import Lab4 from "pages/Lab4";
import Constants from "values";

function App() {
  const route = useLocation();

  const navigate = useNavigate();

  const selectTab = (_: any, value: string) => navigate(value);

  const [isLoading, setIsLoading] = useState<boolean>(false);

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
          {/* <Tab label="Lab 3" value="/3" />
          <Tab label="Lab 4" value="/4" /> */}
        </Tabs>
      </Box>
      <Routes>
        <Route
          path={"/"}
          element={<Lab1 isLoading={isLoading} setIsLoading={setIsLoading} />}
        />
        <Route path="/2" element={<Lab2 />} />
        <Route path="/3" element={<Lab3 />} />
        <Route path="/4" element={<Lab4 />} />
      </Routes>
    </>
  );
}

export default App;
