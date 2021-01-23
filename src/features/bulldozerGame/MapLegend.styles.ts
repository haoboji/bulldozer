import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    margin: 8,
  },
  legend: {
    margin: 8,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    marginLeft: 8,
  },
  header: {
    paddingLeft: 8,
    lineHeight: "40px",
  },
});

export default useStyles;
