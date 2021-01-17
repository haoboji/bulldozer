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
  borderTop: {
    borderTopWidth: 1,
    borderTopStyle: "solid",
    borderTopColor: "gainsboro",
  },
  name: {
    width: 230,
    textOverflow: "ellipsis",
  },
  location: {
    width: 120,
    textAlign: "right",
  },
  fuel: {
    width: 160,
    textAlign: "right",
  },
  cost: {
    width: 100,
    textAlign: "right",
  },
});

export default styles;
