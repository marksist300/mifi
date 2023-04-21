/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from "react";

import { Box, useMediaQuery, useTheme } from "@mui/material";

import Gridrow1 from "@/components/GridRows/Gridrow1";
import Gridrow2 from "@/components/GridRows/Gridrow2";
import Gridrow3 from "@/components/GridRows/Gridrow3";

import { gridTemplateLG } from "./gridLayoutUtils";
import { gridTemplateSM } from "./gridLayoutUtils";

import type { NextPage } from "next";

const dashboard: NextPage = () => {
  const { palette } = useTheme();
  const isOverMediumSizedScreen = useMediaQuery("(min-width: 1200px)");
  return (
    <Box
      width="100%"
      height="100%"
      display="grid"
      gap="1.5rem"
      padding="1rem"
      sx={
        isOverMediumSizedScreen
          ? {
              gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
              gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
              gridTemplateAreas: gridTemplateLG,
            }
          : {
              gridAutoColumns: "1fr",
              gridAutoRows: "80px",
              gridTemplateAreas: gridTemplateSM,
            }
      }
    >
      <Gridrow1 />
      <Gridrow2 />
      <Gridrow3 />
    </Box>
  );
};

export default dashboard;
