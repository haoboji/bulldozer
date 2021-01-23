import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    padding: 8,
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
  title: {
    margin: 16,
    flexShrink: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    transition: "all 1s",
  },
  description: {
    transition: "all 1s",
    overflow: "hidden",
  },
});

export default useStyles;
