import { createStyles } from "@material-ui/core";

const styles = createStyles({
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

export default styles;
