//
import React, { useState } from "react";
import { validateAlphaInput, validateEmail } from "../utils/helpers";
//
// Render the contact section
//
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "message":
        setMessage(value);
        break;
      default:
    }
  };

  const handleInputValidation = (e) => {
    const { name, value } = e.currentTarget;
    setErrorMessage("");
    switch (name) {
      case "name":
        if (!validateAlphaInput(value)) {
          setErrorMessage("Please enter a valid name.");
        }
        break;
      case "email":
        if (!validateEmail(value)) {
          setErrorMessage("Please enter a valid email.");
        }
        break;
      case "message":
        if (!validateAlphaInput(value)) {
          setErrorMessage("Please enter a valid message.");
        }
        break;
      default:
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (
      !validateAlphaInput(name) ||
      !validateAlphaInput(message) ||
      !validateEmail(email)
    ) {
      setErrorMessage("Please enter a valid name, email, and message.");
    } else {
      setName("");
      setEmail("");
      setMessage("");
      setErrorMessage(
        "Thank you for your message! Feature under construction."
      );
    }
  };

  return (
    <div className="col-xs-12 col-sm-9 text-center-xs text-left-sm">
      <div className="container-fluid contact" id="contact">
        <h1>Contact Me</h1>
        <form className="form contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              onChange={handleInputChange}
              onBlur={handleInputValidation}
              type="text"
              id="name"
              name="name"
              value={name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              className="form-control"
              onChange={handleInputChange}
              onBlur={handleInputValidation}
              type="text"
              id="email"
              name="email"
              value={email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="contents">Message:</label>
            <textarea
              className="form-control"
              onChange={handleInputChange}
              onBlur={handleInputValidation}
              type="text"
              id="message"
              name="message"
              value={message}
              rows="3"
            ></textarea>
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="btn btn-outline-primary btn-sm post-form-submit m-5"
              onClick={handleFormSubmit}
            >
              Send
            </button>
            <button
              type="submit"
              className="btn btn-outline-primary btn-sm post-form-cancel my-5"
            >
              Cancel
            </button>
          </div>
          <div className="form-group">
            <input
              className="form-control error-message"
              type="text"
              id="email"
              name="erroMessage"
              value={errorMessage}
              readOnly
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
