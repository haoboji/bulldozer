import { createStyles } from "@material-ui/core";

const styles = createStyles({
  root: {
    margin: 8,
  },
  header: {
    height: 40,
  },
  footer: {
    height: 40,
  },
  item: {
    display: "flex",
    flexDirection: "row",
    overflow: "hidden",
    textOverflow: "ellipsis",
    alignItems: "center",
    paddingLeft: 8,
    borderWidth: 0,
    borderStyle: "solid",
    borderColor: "gainsboro",
  },
  borderTop: {
    borderTopWidth: 1,
  },
  borderBottom: {
    borderBottomWidth: 1,
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
