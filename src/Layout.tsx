import Head from "next/head";
import NavBar from "@/components/NavBar/NavBar";
import { themeSettings } from "@/theme";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";

const Layout = ({ children }: any) => {
  const theme = useMemo(() => createTheme(themeSettings), []);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="NextJS Personal Finance App" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1 maximum-scale=1"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <NavBar />
        {children}
      </ThemeProvider>
    </>
  );
};

export default Layout;
