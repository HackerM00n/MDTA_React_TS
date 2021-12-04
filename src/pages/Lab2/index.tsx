import React, { useEffect } from "react";

import Constants from "values";

function Lab2() {
  useEffect(() => {
    document.title = Constants.LABELS.semanticWeb;
  }, []);

  return <></>;
}

export default Lab2;
