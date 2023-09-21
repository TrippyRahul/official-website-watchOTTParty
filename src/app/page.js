import Benefits from "./components/Benefits";
import Favorite from "./components/Favorite";
import Work from "./components/Work";
import Join from "./components/Join";
import About from "./components/About";
import Accordian from "./components/Accordian";
import Header from "./components/Header";
import Platforms from "./components/Platforms";

export default function Home() {
  return (
    <>
      <Header />
      <Platforms />
      <Benefits />
      <Favorite />
      <Work />
      <Join />
      <About />
      <Accordian />
    </>
  );
}
