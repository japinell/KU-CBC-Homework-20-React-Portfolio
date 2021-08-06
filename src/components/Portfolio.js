//
import React, { useState } from "react";
import Header from "./Header";
import About from "./about/About";
import Projects from "./projects/Projects";
// import Hero from "./Hero";
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
        return <Projects />;
      case "Contact":
        return <About />;
      default:
        return <About />;
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
