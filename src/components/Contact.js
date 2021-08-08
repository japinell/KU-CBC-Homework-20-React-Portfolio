//
import React from "react";
//
// Render the contact section
//
function Contact() {
  return (
    <div className="col-xs-12 col-sm-9 text-center-xs text-left-sm">
      <div className="container-fluid contact" id="contact">
        <h1>Contact Me</h1>
        <form className="form contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input className="form-control" type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              className="form-control"
              type="text"
              id="email"
              name="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="contents">Message:</label>
            <textarea
              className="form-control"
              type="text"
              id="contents"
              name="contents"
              rows="3"
            ></textarea>
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="btn btn-outline-primary btn-sm post-form-submit my-2 my-sm-0"
            >
              Send
            </button>
            <button
              type="submit"
              className="btn btn-outline-primary btn-sm post-form-cancel my-2 my-sm-0"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
