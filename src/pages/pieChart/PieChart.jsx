import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { Box, useTheme } from "@mui/material";
import Pie from "./pie";
import Header from "../../components/Header";

const PieChart = () => {
  // eslint-disable-next-line no-unused-vars
  const theme = useTheme();
  return (
    <Box>
      <Header title="Pie Chart" subTitle="Simple Pie Chart" />

      <Pie />
    </Box>
  );
};

export default PieChart;