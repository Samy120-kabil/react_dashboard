import React from "react";
import { ResponsiveBar } from "@nivo/bar";

import Bar from "./bar";
import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";

const BarChart = () => {
  // eslint-disable-next-line no-unused-vars
  const theme = useTheme();
  return (
    <Box>
      <Header
        title="Bar Chart"
        subTitle="The minimum wage in Germany, France and Spain (EUR/month)"
      />
      <Bar />
    </Box>
  );
};

export default BarChart;