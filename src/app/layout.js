import Schema from "./Schema";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title: "Unite for movie hubs at your own watching room.",
  description:
    "Watch ottparty for virtual movie nights with friends. Create special memories with long-distance loved ones and your own watching room.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.svg" />
        <link rel="canonical" href="https://www.watchottparty.com/" />

        <meta property="og:url" content="https://www.watchottparty.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Unite for movie hubs at your own watching room." />
        <meta
          property="og:description"
          content="Watch ottparty for virtual movie nights with friends. Create special memories with long-distance loved ones and your own watching room."
        />
        <meta
          property="og:image"
          content="https://www.watchottparty.com/footer-logo.svg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="watchottparty.com" />
        <meta property="twitter:url" content="https://www.watchottparty.com/" />
        <meta name="twitter:title" content="Unite for movie hubs at your own watching room." />
        <meta
          name="twitter:description"
          content="Watch ottparty for virtual movie nights with friends. Create special memories with long-distance loved ones and your own watching room."
        />
        <meta
          name="twitter:image"
          content="https://www.watchottparty.com/footer-logo.svg"
        />
      </head>
      <body>
        <Schema />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
