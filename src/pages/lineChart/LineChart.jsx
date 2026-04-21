import { Box, useTheme } from "@mui/material";
import React from "react";
import { ResponsiveLine } from "@nivo/line";
import Line from ".//line";
import Header from "../../components/Header";

const LineChart = () => {
  // eslint-disable-next-line no-unused-vars
  const theme = useTheme();
  return (
    <Box>
      <Header title="Line Chart" subTitle="Simple Line Chart" />

      <Line />
    </Box>
  );
};

export default LineChart;