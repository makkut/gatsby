import * as React from "react";
import type { PageProps } from "gatsby";
import Footer from "../components/Footer/Footer";
import Info from "../components/Info/Info";
import Header from "../components/Header/Header";
import Contact from "../components/ContactIcons/ContactIcons";
import ContactIcons from "../components/ContactIcons/ContactIcons";
import Banner from "../components/Banner/Banner";
import Slider from "../components/Slider/Slider";

const IndexPage: React.FC<PageProps> = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const transformBanner = (x: any, y: any) => {
    if (ref && ref.current) {
      let banner = ref.current as HTMLElement;
      banner.style.transform =
        "translate(-" + x * 10 + "px, -" + y * 10 + "px)";
    }
  };
  const prellaxHandler = (e: any) => {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    transformBanner(x, y);
  };
  const prellaxHandlerMobile = (e: any) => {
    const touch = e.changedTouches[0];
    let x = touch.clientX / window.innerWidth;
    let y = touch.clientY / window.innerHeight;
    transformBanner(x, y);
  };
  return (
    <div onMouseMove={prellaxHandler} onTouchMove={prellaxHandlerMobile}>
      <Header />
      <ContactIcons />
      <Banner ref={ref} />
      <Info />
      <Slider/>
      <Footer />
    </div>
  );
};

export default IndexPage;
