import React from 'react';
import Facebook from "../assets/images/icons/Facebook.svg";
import Instagram from "../assets/images/icons/Instagram.svg";
import Twiter from "../assets/images/icons/Twitter.svg";
import Youtube from "../assets/images/icons/Youtube.svg";
import Logo from "../assets/images/logo.svg";
import Icon1 from "../assets/images/icons/icon-1.png";
import Icon2 from "../assets/images/icons/icon-2.png";
import Icon3 from "../assets/images/icons/icon-3.png";
import Icon4 from "../assets/images/icons/icon-4.png";
import Icon5 from "../assets/images/icons/icon-5.png";
import Icon6 from "../assets/images/icons/icon-6.png";
import Icon7 from "../assets/images/icons/icon-7.png";
import Icon8 from "../assets/images/icons/icon-8.png";
import Icon9 from "../assets/images/icons/icon-9.png";
import Icon10 from "../assets/images/icons/icon-10.png";
function Footer(props) {
    return (
        <div>
              <div className="container-fluid footer_icons mt-4 ">
        <div className="container">
          <div className="row">
            <div className="col  col-sm-3">
              <img src={Icon1} />
            </div>
            <div className="col  col-sm-3">
              <img src={Icon2} />
            </div>
            <div className="col  col-sm-3">
              <img src={Icon3} />
            </div>
            <div className=" col  col-sm-3">
              <img src={Icon4} />
            </div>
            <div className=" col  col-sm-3">
              <img src={Icon5} />
            </div>
            <div className="col  col-sm-3">
              <img src={Icon6} />
            </div>
            <div className="col  col-sm-3">
              <img src={Icon7} />
            </div>
            <div className="col col-sm-3">
              <img src={Icon8} />
            </div>
            <div className="col col-sm-3">
              <img src={Icon9} />
            </div>
            <div className="col  col-sm-3">
              <img src={Icon10} />
            </div>
          </div>

          
        </div>
      </div>

      <div className="container-fluid footer ">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-lg-3 mt-4">
              <img src={Logo} />
              <p className="mt-3 mb-1">
                <strong>Address</strong>
              </p>
              <p>
                Store & Office Jl. Setrasari Kulon III, No. 10-12, Sukarasa,
                Sukasari, Bandung, Jawa Barat, Indonesia 40152
              </p>

              <p className="mt-3 mb-1">
                <strong>Office Hour</strong>
              </p>
              <p>Monday - Sunday 10.00 - 18.00</p>
            </div>
            <div className="col-xs-12 col-sm-6 col-lg-3 mt-4">
              <h5>
                <strong>Get in touch</strong>
              </h5>
              <div className="d-flex justify-content-between">
                <p>
                  <strong>Phone</strong>
                </p>
                <p>022-20277564</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>
                  <strong>Service Center</strong>
                </p>
                <p>0811-233-8899</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>
                  <strong>Customer Service</strong>
                </p>
                <p>0811-235-9988</p>
              </div>
              <div className="d-flex justify-content-between">
                <img src={Facebook} />
                <img src={Instagram} />
                <img src={Twiter} />
                <img src={Youtube} />
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-lg-3 mt-4">
              <h5>
                <strong>Useful Link</strong>
              </h5>
              <p className="mb-1">Warranty & Complaints</p>
              <p className="mb-1">Order & Shipping</p>
              <p className="mb-1">Tracking Order</p>
              <p className="mb-1">About Us</p>
              <p className="mb-1">Repair</p>
              <p className="mb-1">Terms</p>
              <p className="mb-1">FAQ</p>
            </div>
            <div className="col-xs-12 col-sm-6 col-lg-3 mt-4">
              <h5>
                <strong>Campaign</strong>
              </h5>
              <p className="mb-1">Mengenal Arti Cukup</p>
              <p className="mb-1">Tell Your Difference</p>
              <p className="mb-1">Waykambas</p>
              <p className="mb-1">Rebrand</p>
              <p className="mb-1">Gallery</p>
              <p className="mb-1">Singo</p>
              <p className="mb-1">Rakai</p>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
}

export default Footer;