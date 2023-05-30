import { makeStyles } from "@mui/styles";

export const styles = makeStyles({
  headerParentBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  searchBox: {
    margin: "10px 0",
  },

  filterBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  filterBtn: {
    border: "1px solid rgba(0, 0, 0, 0.23)",
    padding: "4px 25px",
    cursor: "pointer",
    backgroundColor: "rgb(181 138 138 / 23%)",
    fontSize: "14px",
    fontWeight: "600",
    borderRadius: "4px",
  },

  locationCardBox: {
    padding: "25px 0",
  },
});
