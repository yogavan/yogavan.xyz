import type { AppProps } from "next/app";

import { AuthProvider } from "@saas-ui/auth";
import { SaasProvider } from "@saas-ui/react";
import { Layout } from "components/layout";

import theme from "../theme";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  const { announcement, header, footer } = pageProps;

  return (
    <SaasProvider theme={theme}>
      <Script src="https://getlaunchlist.com/js/widget.js" defer />
      <AuthProvider>
        <Layout
          announcementProps={announcement}
          headerProps={header}
          footerProps={footer}
        >
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </SaasProvider>
  );
}

export default MyApp;
