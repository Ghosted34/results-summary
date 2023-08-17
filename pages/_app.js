import { Hanken_Grotesk } from "@next/font/google";
import "@/styles/globals.css";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={hanken.className}>
      <Component {...pageProps} />{" "}
    </main>
  );
}
