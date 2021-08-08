//
import React from "react";
import Hero from "./Hero";
import About from "./About";
//
// Render the home page (a combination of the Hero and the About components)
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
