//
import React, { useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import projectData from "./ProjectData";
// import Main from "./Main";
// import Footer from "./Footer";
//
// Main page
//
function Portfolio() {
  //  Track changes to the selection of current page
  const [currentPage, setCurrentPage] = useState("About");
  //  Render current page
  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Projects":
        return <Projects projects={projectData} />;
      case "Contact":
        return <About />;
      default:
        return <Hero />;
    }
  };
  //  Set current page
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      {/* <Hero /> */}
      {/* <Main /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default Portfolio;
