import { useEffect } from "react";
import type { AppProps } from "next/app";
import { Share_Tech_Mono } from "next/font/google";
import { useRouter } from "next/router";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
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

// Pages that should not have the default header/footer layout
const fullscreenPages = ["/2025"];

const ScaffoldEthApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const price = useEthPrice();
  const setEthPrice = useAppStore(state => state.setEthPrice);

  const isFullscreenPage = fullscreenPages.includes(router.pathname);

  useEffect(() => {
    if (price > 0) {
      setEthPrice(price);
    }
  }, [setEthPrice, price]);

  // Fullscreen pages render without the default header/footer
  if (isFullscreenPage) {
    return (
      <WagmiConfig client={wagmiClient}>
        <NextNProgress color="#c913ff" />
        <URQLProvider value={urqlClient}>
          <RainbowKitProvider chains={appChains.chains} avatar={BlockieAvatar}>
            <Component {...pageProps} />
            <Toaster />
          </RainbowKitProvider>
        </URQLProvider>
      </WagmiConfig>
    );
  }

  return (
    <WagmiConfig client={wagmiClient}>
      <NextNProgress color="#c913ff" />
      <URQLProvider value={urqlClient}>
        <RainbowKitProvider chains={appChains.chains} avatar={BlockieAvatar}>
          <div className={`flex flex-col min-h-screen ${shareTechMono.className}`}>
            <Header />
            <main className="relative flex flex-col flex-1">
              <Component {...pageProps} />
            </main>
            <Footer />
          </div>
          <Toaster />
        </RainbowKitProvider>
      </URQLProvider>
    </WagmiConfig>
  );
};

export default ScaffoldEthApp;
