import Schema from "./Schema";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title:
    "Enjoy movies together and create your own watch party at watch ott party",
  description:
    " Have a blast watching movies and shows together with the Watch Ott party and create your own watch party to chat and enjoy the fun with friends in real-time. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/logo.svg" />
        <link rel="canonical" href="https://www.watchottparty.com/" />

        <meta property="og:url" content="https://www.watchottparty.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="  Enjoy movies together and create your own watch party at watch ott party"
        />
        <meta
          property="og:description"
          content=" Have a blast watching movies and shows together with the Watch Ott party and create your own watch party to chat and enjoy the fun with friends in real-time. "
        />
        <meta
          property="og:image"
          content="https://www.watchottparty.com/footer-logo.svg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="watchottparty.com" />
        <meta property="twitter:url" content="https://www.watchottparty.com/" />
        <meta
          name="twitter:title"
          content="  Enjoy movies together and create your own watch party at watch ott party"
        />
        <meta
          name="twitter:description"
          content=" Have a blast watching movies and shows together with the Watch Ott party and create your own watch party to chat and enjoy the fun with friends in real-time. "
        />
        <meta
          name="twitter:image"
          content="https://www.watchottparty.com/footer-logo.svg"
        />
      </head>
      <body>
        <Schema />
        {children}
        <Footer />
      </body>
    </html>
  );
}
