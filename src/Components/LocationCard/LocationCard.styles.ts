import { makeStyles } from "@mui/styles";

export const styles = makeStyles({
  locationCardParent: {
    border: "1px solid rgba(0, 0, 0, 0.23)",
    marginBottom: "15px",
    borderRadius: "4px",
    padding: "25px",
  },

  locationCardTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  locationCardMiddle: {
    margin: "10px 0",
  },

  locationCardBottom: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  locationName: {
    fontWeight: "bold",
  },

  locationStatus: {
    borderRadius: "20px",
    border: "1px solid rgba(0, 0, 0, 0.23) ",
    fontWeight: "bold",
    padding: "5px 20px",
    color: "red",
  },
});
