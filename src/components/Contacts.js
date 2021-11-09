import React from "react";
import emailjs from "emailjs-com";

const Contacts = () => {
  const serviceID = "service_ID";
  const templateID = "template_ID";
  const userID = "user_nDZy9a4qNmNI5EkLSTiE8";

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceID, templateID, e.target, userID).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div className="contacts">
      <div className="text-center">
        <h1>Contact me</h1>
        <p>
          Please fill out the form and describe your proyect needs and i'll
          contact you as soon as posible
        </p>
      </div>
      <div className="container">
        <form onSubmit={sendEmail}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              {/* name input */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                />
                <div className="line"></div>
              </div>
              {/* phone input */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                  name="phone"
                />
                <div className="line"></div>
              </div>
              {/* email input */}
              <div className="text-center">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                />
                <div className="line"></div>
              </div>
              {/* subject input */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                />
                <div className="line"></div>
              </div>
            </div>
            <div className="col-md-6 col-xs-12">
              {/* subject input */}
              <div className="text-center">
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Por favor envianos tus comentarios... "
                  name="description"
                ></textarea>
                <div className="line"></div>
              </div>
              <button className="btn-main-offer contact-btn " type="submit">
                contact me
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
