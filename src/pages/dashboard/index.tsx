import type { NextPage } from "next";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import Gridbox from "@/components/Gridbox/Gridbox";

const gridTemplateLG = `
  "a b c"
  "a b c"
  "a b f"
  "d e f"
  "d e f"
  "d h i"
  "g h i"
  "g h j"
  "g h j"
`;

const gridTemplateSM = `
  "a"
  "a"
  "a"
  "b"
  "b"
  "b"
  "c"
  "c"
  "d"
  "d"
  "d"
  "e"
  "e"
  "f"
  "f"
  "f"
  "g"
  "g"
  "g"
  "h"
  "h"
  "h"
  "i"
  "i"
  "j"
  "j"
`;

const dashboard: NextPage = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { palette } = useTheme();
  // eslint-disable-next-line react-hooks/rules-of-hooks
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
      <Gridbox gridArea="a" bgcolor="#FFF" borderRadius=".4rem"></Gridbox>
      <Gridbox gridArea="b" bgcolor="#FFF" borderRadius=".4rem"></Gridbox>
      <Gridbox gridArea="c" bgcolor="#FFF" borderRadius=".4rem"></Gridbox>
      <Gridbox gridArea="d" bgcolor="#FFF" borderRadius=".4rem"></Gridbox>
      <Gridbox gridArea="e" bgcolor="#FFF" borderRadius=".4rem"></Gridbox>
      <Gridbox gridArea="f" bgcolor="#FFF" borderRadius=".4rem"></Gridbox>
      <Gridbox gridArea="g" bgcolor="#FFF" borderRadius=".4rem"></Gridbox>
      <Gridbox gridArea="h" bgcolor="#FFF" borderRadius=".4rem"></Gridbox>
      <Gridbox gridArea="i" bgcolor="#FFF" borderRadius=".4rem"></Gridbox>
      <Gridbox gridArea="j" bgcolor="#FFF" borderRadius=".4rem"></Gridbox>
    </Box>
  );
};

export default dashboard;
