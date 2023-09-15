import { AppActions, AppState } from "@/Store/interface";
import { Provider, useCreateStore } from "@/Store/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

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
    // const url = `http://mantraapi.gurupooja.co.in/63fceb710de8f9fc2ff5ea6f`;
    // const data = await get({ url });
    // if (data?.data?.length) {
    //   console.log(setCategoryData)
    //   setCategoryData(data.data);
    // }
    const data = [
      {
        dd: "",
      },
      {
        dd: "111",
      },
    ];
    setCategoryData(data);
  };
  return (
    <Provider createStore={appStore}>
      <Component {...pageProps} />
    </Provider>
  );
}
