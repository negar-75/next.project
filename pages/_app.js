import "@/styles/globals.css";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

config.autoAddCss = false;
library.add(faArrowRight);

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
