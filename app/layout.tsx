/* eslint-disable react/react-in-jsx-scope */
import Footer from "@/components/footer";
import Navbar from "../components/navbar";
import "./styles/globals.scss";
import Head from "next/head";

export const metadata = {
  title: "Kayla Marie Lane",
  description: "Front End Developer",
  icons: {
    icon: "/icon_x16.png"
  },
  openGraph: {
    type: "website",
    url: "https://www.kaylamarielane.com/",
    title: "Kayla Marie Lane",
    description: "Kayla Lane's Portfolio Website",
    siteName: "Kayla Lane",
    images: [{
      url: "/icon_x16.png",
    }],
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title key="title">Kayla Lane</title>
        <meta
          name="description"
          content="Kayla Lane's Front-End Developer Portfolio"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon_x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon_x16.png" />
        <meta name="theme-color" content="#8174AC" />
        <meta property="og:url" content="https://www.kaylamarielane.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Kayla Lane's Portfolio" />
        <meta
          property="og:description"
          content="Kayla Lane's Front-End Developer Portfolio."
        />

        <meta name="twitter:card" content="summary_large_image" />
        <script
          src="https://kit.fontawesome.com/99affd1b0f.js"
          crossOrigin="anonymous"
        ></script>
        <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
        <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
      </Head>
      <body className=" text-text dark:bg-darkbg dark:text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
