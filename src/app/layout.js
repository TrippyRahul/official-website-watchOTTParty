import Schema from "./Schema";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title:
    "Enjoy movies together and create your own watch party at watch ott party",
  description:
    " Have a blast watching movies and shows together with the Watch Ott party and create your own watch party to chat and enjoy the fun with friends in real-time. ",
  openGraph: {
    title:
      "Enjoy movies together and create your own watch party at watch ott party",
    description:
      " Have a blast watching movies and shows together with the Watch Ott party and create your own watch party to chat and enjoy the fun with friends in real-time. ",
    url: "https://www.watchottparty.com/",
    type: "website",
    images: "https://www.watchottparty.com/footer-logo.svg",
  },
  alternates: {
    canonical: "https://www.watchottparty.com/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/logo.svg" />
        <meta
          name="google-site-verification"
          content="lgQlCIsl3TMop-dMHvoYFsD3Ny40etp65BpD2uV_QTs"
        />
      </head>
      <body>
        <Schema />
        {children}
      </body>
    </html>
  );
}
