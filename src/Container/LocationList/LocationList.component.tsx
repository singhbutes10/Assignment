import React, { useState } from "react";

//Components
import {
  Grid,
  Box,
  IconButton,
  Typography,
  TextField,
  InputAdornment,
} from "@mui/material";
import LocationCard from "../../Components/LocationCard/LocationCard";

//Icons
import CachedIcon from "@mui/icons-material/Cached";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";

//Styles
import { styles } from "./LocationList.styles";
import { filterList, locationList } from "./Constants";

const LocationList = () => {
  const classes = styles();
  const [list, setList] = useState(locationList);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filteredData = locationList.filter((item) => {
      return item.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setList(filteredData);
  };

  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
        <Box className={classes.headerParentBox}>
          <Box>
            <IconButton aria-label="refresh">
              <CachedIcon />
            </IconButton>
          </Box>

          <Box>
            <Typography sx={{ fontWeight: 600 }}>Locations</Typography>
          </Box>

          <Box>
            <IconButton aria-label="add">
              <AddIcon />
            </IconButton>
          </Box>
        </Box>

        <Box className={classes.searchBox}>
          <TextField
            id="searchBar"
            placeholder="Search"
            fullWidth
            size="small"
            onChange={handleSearch}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            variant="outlined"
          />
        </Box>

        <Box className={classes.filterBox}>
          {filterList.map((item) => {
            return (
              <Typography className={classes.filterBtn}>
                {item.label}
              </Typography>
            );
          })}
        </Box>

        <Box className={classes.locationCardBox}>
          {list.map((item) => {
            return (
              <LocationCard
                name={item.name}
                status={item.status}
                address={item.address}
                date={item.date}
                time={item.time}
              />
            );
          })}
        </Box>
      </Grid>
    </Grid>
  );
};

export default LocationList;
