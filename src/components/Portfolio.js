//
import React, { useState } from "react";
import Home from "./Home";
import Header from "./Header";
// import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import projectData from "./ProjectData";
// import Footer from "./Footer";
//
// Main page
//
function Portfolio() {
  //  Track changes to the selection of current page
  const [currentPage, setCurrentPage] = useState("Home");
  //  Render current page
  const renderPage = () => {
    switch (currentPage) {
      case "Home":
        return (
          <Home currentPage={currentPage} handlePageChange={handlePageChange} />
        );
      case "About":
        return (
          <About
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        );
      case "Projects":
        return (
          <Projects
            currentPage={currentPage}
            handlePageChange={handlePageChange}
            projects={projectData}
          />
        );
      case "Contact":
        return (
          <Contact
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        );
      default:
        return (
          <Home currentPage={currentPage} handlePageChange={handlePageChange} />
        );
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
