import { LanguageProvider } from "@/context/LanguageContext";

import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}

export default MyApp;
