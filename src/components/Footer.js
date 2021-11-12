import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>Yopal City Cra 21 35-68 Casanare - Colombia</p>
            </div>
            <div className="d-flex">
              <a href="tel:3214466552">+57(321)4466552</a>
            </div>
            <div className="d-flex">
              <p>gerencia@clinicanieves.co</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <a className="footer-nav"> Home</a>
                <br />
                <a className="footer-nav"> About me</a>
                <br />
                <a className="footer-nav"> Services</a>
                <br />
              </div>
              <div className="col">
                <a className="footer-nav"> Experience</a>
                <br />
                <a className="footer-nav"> Portfolio</a>
                <br />
                <a className="footer-nav"> Contacts</a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <FacebookShareButton
                url={"https://www.youtube.com/watch?v=80VkehBP4PY"}
                quote={"Clinica Nieves Excelencia Vascular"}
                hashtag="#clinicanieves"
              >
                <FacebookIcon className="mx-3" size={36} />
              </FacebookShareButton>
              <LinkedinShareButton
                url={"https://www.youtube.com/watch?v=80VkehBP4PY"}
                quote={"Clinica Nieves Excelencia Vascular"}
                hashtag="#clinicanieves"
              >
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>
              <WhatsappShareButton
                url={"https://www.youtube.com/watch?v=80VkehBP4PY"}
                quote={"Clinica Nieves Excelencia Vascular"}
                hashtag="#clinicanieves"
              >
                <WhatsappIcon className="mx-3" size={36} />
              </WhatsappShareButton>
            </div>
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;Clinica Nieves | Todos Los
              Derechos Reservados
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
