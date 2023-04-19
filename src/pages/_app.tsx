import Layout from "@/Layout";
import { store } from "@/appState/store";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";

import "@/styles/globals.css";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
