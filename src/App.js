import React from "react";
import MyNavbar from "./components/nav";
import { Banner } from "./components/banner";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/footer"; // tanpa kurung kurawal
import AboutTabs from "./components/about";
import { Projects } from "./components/projects";
import { Contact } from "./components/Contact";

function App() {
  return (
    <>
      <MyNavbar />
      <Banner />
      <AboutTabs />
      <Projects />
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
