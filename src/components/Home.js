//
import React from "react";
import Hero from "./Hero";
import About from "./About";
//
// Render the home page
//
function Home({ currentPage, handlePageChange }) {
  return (
    <div>
      <Hero />
      <About currentPage={currentPage} handlePageChange={handlePageChange} />
    </div>
  );
}

export default Home;
