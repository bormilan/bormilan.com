import { Grid, Typography } from "@mui/material";

export default function Posts() {
  return (
    <div className="page">
      <Grid
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ height: "300px", width: "100%" }}
      >
        <Typography variant="h4" color="white">
          This Page is under construction.
        </Typography>
      </Grid>
    </div>
  );
}
