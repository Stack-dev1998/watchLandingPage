import React from "react";
import "./jewelryComponents/style.css";
import Logo from "./jewelryComponents/images/Logo.svg";
import Polygon from "./jewelryComponents/images/Polygon.svg";
import Octagon from "./jewelryComponents/images/Octagon.svg";
import NewArrival from "./jewelryComponents/images/New_arrival.svg";
import Nicklas from "./jewelryComponents/images/Nicklas.svg";
import Earings from "./jewelryComponents/images/Earings.svg";
import Facebook from "./jewelryComponents/images/Facebook.svg";
import Instagram from "./jewelryComponents/images/Instagram.svg";
import Twitter from "./jewelryComponents/images/Twitter.svg";
import Mail from "./jewelryComponents/images/Mail.svg";
import Rings from "./jewelryComponents/images/Rings.svg";
import Welcome from "./jewelryComponents/images/Welcome.png";
import { Nav } from "react-bootstrap";

function Jewelry(props) {
  return (
    <div className="jewelry">
      <div className="main_section ">
        <div className="container  d-flex flex-column justify-content-between align-items-center" style={{height:"400px"}}>
          <div className=" width_60 d-flex justify-content-center">
            <img src={Logo} />
          </div>

          <Nav className=" width_60 nav_bar d-flex justify-content-between align-items-center" style={{width:"100%"}}>
            <Nav.Item>
              <Nav.Link to="/watches" style={{ color: "black" }}>
                Watches
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link to="/eyewear" style={{ color: "black" }}>
                Eyewear
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link to="/accessories" style={{ color: "black" }}>
                Accessories
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link to="/news" style={{ color: "black" }}>
                News
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <div className=" width_60 d-flex align-items-center justify-content-center">
            <img className="welcome mt-4" src={Welcome} />
          </div>
          <div className="to text-center">to Hassan</div>
          <img src={Polygon} />
          <p className="mb-3">Elegance and quality no matter what your style</p>
        </div>
      </div>

      <div className="container width_60  text-center mt-4">
        <img src={Octagon} />
        <p className="mt-2">
          Use code <span style={{ color: "#C48300" }}>1234</span> on checkout to
          receive
          <br /> <span style={{ color: "#C48300" }}>5% off </span> on your first
          purchase.
        </p>
        <br />
        <hr style={{ border: "1px solid #C48300" }}></hr>
        <br />
        <img src={NewArrival} />
        <div className="row mt-5 arrivals">
          <div className="col-xs-12 col-sm-6">
            <img src={Nicklas} />
            <h6>necklace</h6>
            <p>
              Amet minim mollit non
              <br /> deserunt ullamco est sit aliqua.
            </p>
            <a href="#">shop now</a>
          </div>
          <div className="col-xs-12 col-sm-6">
            <img src={Earings} /> <h6>Earings</h6>
            <p>
              Amet minim mollit non<br></br> deserunt ullamco est sit aliqua.
            </p>
            <a href="#">shop now</a>
          </div>
        </div>
      </div>

      <div className="row text-center mt-4 rings">
        <div className="container    my-auto ">
          <div className="row width_60 mx-auto">
            <div className="col">
              <img src={Rings} />
            </div>
            <div className="col text-center my-auto">
              <h3>Rings</h3>
              <p>
                Amet minim mollit
                <br /> non deserunt ullamco est sit aliqua.
              </p>
              <button className="shop_now">Shop now</button>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex flex-column justify-content-around align-items-center  text-center  my_footer">
        <div className="d-flex">
          <img src={Facebook} className="m-2" />
          <img src={Instagram} className="m-2" />
          <img src={Twitter} className="m-2" />
          <img src={Mail} className="m-2" />
        </div>
        <p>
          Sent from Acme<br></br>
          Fake adress
        </p>
      </div>
    </div>
  );
}

export default Jewelry;
