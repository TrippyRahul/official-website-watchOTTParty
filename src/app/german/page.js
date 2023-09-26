import React from "react";
import Header from "./components/Header";
import Platforms from "./components/Platforms";
import Work from "./components/Work";
import Join from "./components/Join";
import Benefits from "./components/Benefits";
import Favorite from "./components/Favorite";
import About from "./components/About";
import Accordian from "./components/Accordian";
import Footer from "./components/Footer";
import Comments from "./components/Comments";

export const metadata = {
  title: "Genießen Sie Filme und Shows zusammen mit einem watch party",
  description:
    "Viel Spaß beim Ansehen Ihrer Lieblingsfilme und -sendungen zusammen mit der Watch Party, bei der Sie Ihre eigenen Erinnerungen schaffen können. Das Beste daran ist, dass Sie während der Show sogar chatten, Audio- und Videoanrufe tätigen können.",
  openGraph: {
    title: "Genießen Sie Filme und Shows zusammen mit einem watch party",
    description:
      "Viel Spaß beim Ansehen Ihrer Lieblingsfilme und -sendungen zusammen mit der Watch Party, bei der Sie Ihre eigenen Erinnerungen schaffen können. Das Beste daran ist, dass Sie während der Show sogar chatten, Audio- und Videoanrufe tätigen können.",
    url: "https://www.watchottparty.com/german",
    type: "website",
    images: "https://www.watchottparty.com/footer-logo.svg",
  },
  alternates: {
    canonical: "https://www.watchottparty.com/german",
  },
};

const page = () => {
  return (
    <html lang="de">
      <body>
        <Header />
        <Platforms />
        <Benefits />
        <Favorite />
        <Comments />
        <About />
        <Accordian />
        <Footer />
      </body>
    </html>
  );
};

export default page;
