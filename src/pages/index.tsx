import * as React from "react"
import type { PageProps } from "gatsby"
import Footer from "../components/Footer/Footer"
import Info from "../components/Info/Info";
import Header from "../components/Header/Header";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div>
      <Header/>
      <h1>Gatsby</h1>
      <Info/>
      <Footer />
    </div>
  );
}

export default IndexPage

