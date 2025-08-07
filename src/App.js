import React from "react";
import MyNavbar from "./components/nav";
import { Banner } from "./components/banner";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/footer"; // tanpa kurung kurawal
import AboutTabs from "./components/about";
import { Projects } from "./components/projects";
import { Contact } from "./components/Contact";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
    <Helmet>
        <title>Revan Junior Wardana | Portofolio</title>
        <meta
          name="description"
          content="Selamat datang di portofolio Revan Junior Wardana — Web Developer dan UI/UX Designer dari Indonesia."
        />
        <meta property="og:title" content="Revan Junior Wardana | Portofolio" />
        <meta property="og:description" content="Lihat proyek kreatif dan pengalaman Revan dalam pengembangan web." />
        <meta property="og:image" content="https://personal-website-gold-two.vercel.app/preview.jpg" />
        <meta property="og:url" content="https://personal-website-gold-two.vercel.app/" />
      </Helmet>
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
