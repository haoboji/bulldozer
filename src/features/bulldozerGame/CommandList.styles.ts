import { createStyles } from "@material-ui/core";

const styles = createStyles({
  root: {
    margin: 8,
  },
  item: {
    display: "flex",
    flexDirection: "row",
    overflow: "hidden",
    textOverflow: "ellipsis",
    alignItems: "center",
    paddingLeft: 8,
  },
});

export default styles;
