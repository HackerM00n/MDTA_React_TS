import Grid from "@mui/material/Grid";
import IPagePart from "types/IPagePart";

function PagePart({ children, xs = 6, windowHeight }: IPagePart) {
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

export default PagePart;
