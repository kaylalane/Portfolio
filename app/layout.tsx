/* eslint-disable react/react-in-jsx-scope */
import Footer from "@/components/footer";
import Navbar from "../components/navbar";
import "./styles/globals.scss";
import Head from "next/script";
import Script from "next/script";

export const metadata = {
  title: "Kayla Lane",
  description: "Kayla Lane's Front End Developer Portfolio",
  icons: {
    icon: "/icon_x16.png",
  },
  openGraph: {
    type: "website",
    url: "https://www.kaylamarielane.com/",
    title: "Kayla Marie Lane",
    description: "Kayla Lane's Front End Developer Portfolio",
    siteName: "Kayla Lane",
    images: [
      {
        url: "/icon_x16.png",
      },
    ],
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
        <head>
          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-H312EDY6E5"
          ></Script>
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
      window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-H312EDY6E5', {
    page_path: window.location.pathname,
    });
      `,
            }}
          />
        </head>
      </Head>
      <body className=" text-text bg-lightbg dark:bg-darkbg dark:text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
