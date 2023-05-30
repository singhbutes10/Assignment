import React from "react";

//Components
import { Box, IconButton, Typography } from "@mui/material";

//Icons
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

//styles
import { styles } from "./LocationCard.styles";

interface LocationCardTypes {
  name: string;
  status: string;
  address: string;
  date: string;
  time: string;
}

const LocationCard = ({
  name,
  status,
  address,
  date,
  time,
}: LocationCardTypes) => {
  const classes = styles();

  return (
    <Box className={classes.locationCardParent}>
      <Box className={classes.locationCardTop}>
        <Typography className={classes.locationName}>{name}</Typography>
        <Typography className={classes.locationStatus}>{status}</Typography>
      </Box>

      <Box className={classes.locationCardMiddle}>
        <Typography>{address}</Typography>
      </Box>

      <Box className={classes.locationCardBottom}>
        <Box display="flex" alignItems="center">
          <IconButton aria-label="calendar">
            <CalendarMonthIcon />
          </IconButton>
          <Typography>{date}</Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <IconButton aria-label="time">
            <AccessTimeIcon />
          </IconButton>
          <Typography>{time}</Typography>
        </Box>
        <Typography sx={{ ml: "auto", color: "grey" }}>0h</Typography>
      </Box>
    </Box>
  );
};

export default LocationCard;
