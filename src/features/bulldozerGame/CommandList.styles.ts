import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
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
  header: {
    height: 40,
    borderBottomStyle: "solid",
    borderBottomColor: "gainsboro",
    borderBottomWidth: 1,
  },
});

export default useStyles;
