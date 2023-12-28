/* eslint-disable react/react-in-jsx-scope */
import Footer from "@/components/footer";
import Navbar from "../components/navbar";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: {
    default: "Kayla Lane",
    template: " | Kayla Lane",
  },
  description: "Kayla Lane's Frontend Developer Portfolio",
  icons: {
    icon: "/icon_x16.png",
  },
  metadataBase: new URL("https://www.kaylamarielane.com/"),
  openGraph: {
    type: "website",
    url: "https://www.kaylamarielane.com/",
    title: "Kayla Lane",
    description: "Kayla Lane's Frontend Developer Portfolio",
    siteName: "Kayla Lane",
    images: [
      {
        url: "/icon_x16.png",
        width: 16,
        height: 16,
      },
      {
        url: "/icon_x32.png",
        width: 32,
        height: 32,
      },
    ],
    locale: "en-US",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Kayla Lane",
    card: "summary_large_image",
  },
  verification: {
    google: "G-H312EDY6E5",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className=" dark">
      <body className="">
        <Navbar />
        <main className="min-h-screen">
          {children}
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
}
