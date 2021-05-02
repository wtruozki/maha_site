import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextNprogress from "nextjs-progressbar";
import { AnimateSharedLayout } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNprogress
        color="#AF8E53"
        startPosition={0.2}
        stopDelayMs={200}
        height="4"
      />
      <AnimateSharedLayout>
        <div suppressHydrationWarning>
          {typeof window === "undefined" ? null : <Component {...pageProps} />}
        </div>
      </AnimateSharedLayout>
    </>
  );
}

export default MyApp;
