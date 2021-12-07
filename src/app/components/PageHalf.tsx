import Grid from "@mui/material/Grid";

import IPageHalf from "types/IPageHalf";

function PageHalf({ children, xs = 6, windowHeight }: IPageHalf) {
  return (
    <Grid item xs={xs}>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ height: windowHeight - 100 }}
      >
        {children}
      </Grid>
    </Grid>
  );
}

export default PageHalf;
