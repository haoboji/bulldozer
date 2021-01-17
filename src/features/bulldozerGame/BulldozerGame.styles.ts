import { createStyles } from "@material-ui/core";

const styles = createStyles({
  root: {
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    padding: 8,
  },
  welcomePage: {
    flexGrow: 0.5,
  },
  main: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  column: {
    display: "flex",
    flexDirection: "column",
  },
  map: {
    padding: 16,
    margin: 8,
  },
});

export default styles;
