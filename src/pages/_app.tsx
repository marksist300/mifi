import Head from "next/head";
import type { AppProps } from "next/app";
import NavBar from "@/components/NavBar/NavBar";
import { themeSettings } from "@/theme";
import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";
import { useMemo } from "react";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const theme = useMemo(() => createTheme(themeSettings), []);
  const { palette } = themeSettings;
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
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
