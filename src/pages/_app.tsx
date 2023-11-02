import { AppActions, AppState } from "@/store/interface";
import { Provider, useCreateStore } from "@/store/store";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import AppHeader from "@/components/AppHeader/AppHeader";
import Footer from "@/components/Footer/Footer";

type TProps = Pick<AppProps, "Component" | "pageProps"> & {
  initialServerSideState: AppState & AppActions;
};

export default function MyApp({
  Component,
  pageProps,
  initialServerSideState,
}: TProps) {
  const appStore = useCreateStore(initialServerSideState);
  const { categoryData, setCategoryData } = appStore().getState();
  const [footerMenu, setFooterMenu ] = useState([]);

  useEffect(() => {
    callGetApi();
  }, []);

  const callGetApi = async () => {
  };
  return (
    <Provider createStore={appStore}>
      <AppHeader setFooterMenu={setFooterMenu}/>
      <Component {...pageProps} />
      <Footer footerMenu={footerMenu}/>
    </Provider>
  );
}
