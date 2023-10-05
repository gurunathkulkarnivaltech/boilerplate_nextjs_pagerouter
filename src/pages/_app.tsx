import { AppActions, AppState } from "@/store/interface";
import { Provider, useCreateStore } from "@/store/store";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
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

  useEffect(() => {
    callGetApi();
  }, []);

  const callGetApi = async () => {
  };
  return (
    <Provider createStore={appStore}>
      <AppHeader />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}
