import { Html, Head, Main, NextScript } from "next/document";
import { GTM_ID } from "@utils/gtm";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@900&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            className="hidden invisible"
          />
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
