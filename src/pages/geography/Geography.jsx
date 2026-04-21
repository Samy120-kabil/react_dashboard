import React from "react";
import { ResponsiveChoropleth } from "@nivo/geo";
import { Box, useTheme } from "@mui/material";

import Geo from "./geo";
import Header from "../../components/Header";

const Geography = () => {
  // eslint-disable-next-line no-unused-vars
  const theme = useTheme();
  return (
    <Box>
      <Header title="Geography" subTitle="Simple Geography Chart" />

      <Geo />
    </Box>
  );
};

export default Geography;