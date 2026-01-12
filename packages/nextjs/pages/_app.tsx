import { ReactElement, ReactNode, useEffect } from "react";
import type { AppProps } from "next/app";
import { Share_Tech_Mono } from "next/font/google";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { NextPage } from "next";
import NextNProgress from "nextjs-progressbar";
import { Toaster } from "react-hot-toast";
import { Client, Provider as URQLProvider, cacheExchange, fetchExchange } from "urql";
import { WagmiConfig } from "wagmi";
import { Footer } from "~~/components/Footer";
import { Header } from "~~/components/Header";
import { BlockieAvatar } from "~~/components/scaffold-eth";
import { useEthPrice } from "~~/hooks/scaffold-eth";
import { useAppStore } from "~~/services/store/store";
import { wagmiClient } from "~~/services/web3/wagmiClient";
import { appChains } from "~~/services/web3/wagmiConnectors";
import "~~/styles/globals.css";

const shareTechMono = Share_Tech_Mono({ subsets: ["latin"], weight: "400" });

const urqlClient = new Client({
  url: "https://bg-ponder-indexer-production.up.railway.app/",
  exchanges: [cacheExchange, fetchExchange],
});

export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const ScaffoldEthApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const price = useEthPrice();
  const setEthPrice = useAppStore(state => state.setEthPrice);

  useEffect(() => {
    if (price > 0) {
      setEthPrice(price);
    }
  }, [setEthPrice, price]);

  const getLayout =
    Component.getLayout ??
    (page => (
      <div className={`flex flex-col min-h-screen ${shareTechMono.className}`}>
        <Header />
        <main className="relative flex flex-col flex-1">{page}</main>
        <Footer />
      </div>
    ));

  return (
    <WagmiConfig client={wagmiClient}>
      <NextNProgress color="#c913ff" />
      <URQLProvider value={urqlClient}>
        <RainbowKitProvider chains={appChains.chains} avatar={BlockieAvatar}>
          {getLayout(<Component {...pageProps} />)}
          <Toaster />
        </RainbowKitProvider>
      </URQLProvider>
    </WagmiConfig>
  );
};

export default ScaffoldEthApp;
