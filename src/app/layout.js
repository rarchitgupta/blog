import "../styles/globals.css";

import { Inter, Libre_Baskerville, Gabarito } from "next/font/google";

import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const gabarito = Gabarito({
  subsets: ["latin"],
  display: "swap",
  variable: "--gabarito",
});

const libre_baskerville = Libre_Baskerville({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "700"],
  variable: "--libre-baskerville",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.className} ${libre_baskerville.className}`}
    >
      <body className="overflow-x-hidden antialiased">
        <main>
          {children}
          <PrismicPreview repositoryName={repositoryName} />
        </main>
      </body>
    </html>
  );
}
