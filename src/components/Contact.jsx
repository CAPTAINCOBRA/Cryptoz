import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import "./bootstrap.min.css";

const Contact = () => {
  return (
    <div>
      <section className="py-3">
        {/* <Heading title="Contact Us" /> */}

        <div className="col-10 col-sm-8 mx-auto my-4">
          <div className="display-4 text-wheat contact-custom my-3">
            Contact Ekansh Baweja
          </div>
          <form action="https://formspree.io/f/xvodyyvo" method="POST">
            <div className="form-group">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                className="form-control opacity9"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                className="form-control opacity9"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="mobile"
                id="mobile"
                placeholder="Your mobile"
                className="form-control opacity9"
              />
            </div>
            <div className="form-group">
              <textarea
                type="text"
                name="description"
                id="description"
                placeholder="Your message"
                className="form-control opacity9"
                rows="7"
              />
            </div>
            <button
              type="submit"
              className="btn btn-warning btn-block btn-custom col-4 mx-auto"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
