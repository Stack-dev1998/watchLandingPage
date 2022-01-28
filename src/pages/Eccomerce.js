import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Line1 from "../assets/images/line1.svg";
import Line2 from "../assets/images/line2.svg";
import Line3 from "../assets/images/line3.svg";
import Love from "../assets/images/love.svg";
import Hand from "../assets/images/hand.png";
import MainWatch from "../assets/images/main_watch.png";
import Image1 from "../assets/images/image-1.png";
import Image2 from "../assets/images/image-2.png";
import Image3 from "../assets/images/image-3.png";
import Image4 from "../assets/images/image-4.png";
import Image5 from "../assets/images/image-5.png";
import Image6 from "../assets/images/image-6.png";
import Image7 from "../assets/images/image-7.png";
import Image8 from "../assets/images/image-8.png";
import Image9 from "../assets/images/image-9.png";
import Image10 from "../assets/images/image-10.png";
import Image11 from "../assets/images/image-11.png";
import Image12 from "../assets/images/image-12.png";
import Image13 from "../assets/images/image-13.png";
import Image14 from "../assets/images/image-14.png";
import Image15 from "../assets/images/image-15.png";
import Image16 from "../assets/images/image-16.png";
import Image17 from "../assets/images/image-17.png";
import Image18 from "../assets/images/image-18.png";
import AddToCart from "../assets/images/add-cart.svg";
function Eccomerce(props) {
  return (
    <div  className="body">
      <Navbar />
      <div className="hero_section">
        <div
          className="container"
          style={{ background: "#F1DDC9", minHeight: "400px" }}
        >
          <div className="row">
            <div className="col-xs-12  col-md-3">
              <img
                src={MainWatch}
                style={{
                  position: "relative",
                  marginTop: "40px",
                  width: "100%",
                }}
              />
            </div>
            <div className="col-xs-12  col-md-9">
              <h2 className="main_heading">
                WAY KAMBAS <br /> MINI EBONY
              </h2>
              <p className="paragraph">
                MATOA Way Kambas - This wood is chosen to represent the Sumatran
                Rhino's skin which is designed with an overlap effect on its
                strap to represent Rhino's skin.
              </p>
              <div className="d-flex">
                <button className="add_to_cart">
                  <img src={AddToCart} /> Add To Cart
                </button>
                <button className="ci_btn">Cicil</button>
              </div>
              <div className="right_arrows">
                <button>&#10092;</button>
                <button>&#10093;</button>
              </div>
            </div>
          </div>
        </div>
        <div className="line_images">
          <img src={Line1} style={{ display: "block" }} />
          <img src={Line2} style={{ display: "block", marginTop: "-100px" }} />
          <img src={Line3} style={{ display: "block", marginTop: "-120px" }} />
        </div>
      </div>

      <div className="container  second_section">
        <div className="row">
          <div className="col-xs-12  col-md-6">
            <div className="left_div row">
              <div className="col-xs-12 col-md-6 order-2 order-md-1 bg_white p-4">
                <h4>
                  Luxurious <strong>Eyewear</strong>
                </h4>
                <p>See the beauty of exotic world with the luxurious glasses</p>
                <a href="#" className="discover_now">
                  Discover Now
                </a>
              </div>
              <div className="col-xs-12 order-1 order-md-2 col-md-6 bg_white">
                <img
                  src={Image1}
                  style={{
                    display: "block",
                    width: "100%",
                    bottom: 0,
                    marginTop: "40px",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-xs-12  col-md-6">
            <div className=" right_div row">
              <div className="col-xs-12 col-md-6 order-2 order-md-1 bg_white p-4">
                <h4>
                  Luxurious <strong>Eyewear</strong>
                </h4>
                <p>See the beauty of exotic world with the luxurious glasses</p>
                <a href="#" className="discover_now">
                  Discover Now
                </a>
              </div>
              <div className="col-xs-12 col-md-6 order-1 order-md-2  bg_white">
                <img
                  src={Image2}
                  className="img_width_100"
                  style={{
                    display: "block",
                    bottom: 0,
                    marginTop: "40px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container monthly_deal">
        <h1>Monthly Deals</h1>
        <div className="row">
          <div className="col-xs-12 col-md-6 col-lg-3">
            <div className="bg_white card container">
              <img src={Image3} className="img img_width_100" />
              <p className="m-0 name">Singo Maple</p>
              <p className="discount m-0">20% Off</p>
              <p className="cross m-0">Rp 1.500.000</p>
              <p className="price">Rp 1.264.000</p>

              <div className="hovr">
                <button className="love">
                  <img src={Love} />
                </button>
                <button className="add_to_cart">add To Cart</button>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-3">
            <div className="bg_white card container">
              <img src={Image4} className="img" style={{ display: "block" }} />
              <p className="m-0 name">Rakai Ebony</p>
              <p className="discount m-0">20% Off</p>
              <p className="cross m-0">Rp 1.500.000</p>
              <p className="price">Rp 1.264.000</p>

              <div className="hovr">
                <button className="love">
                  <img src={Love} />
                </button>
                <button className="add_to_cart">add To Cart</button>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-3">
            <div className="bg_white card container">
              <img src={Image5} className="img " />
              <p className="m-0 name">Singo Ebony</p>
              <p className="discount m-0">20% Off</p>
              <p className="cross m-0">Rp 1.500.000</p>
              <p className="price">Rp 1.264.000</p>

              <div className="hovr">
                <button className="love">
                  <img src={Love} />
                </button>
                <button className="add_to_cart">add To Cart</button>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-3">
            <div className="bg_white card container">
              <img src={Image6} className="img " />
              <p className="m-0 name">Singo Maple</p>
              <p className="discount m-0">20% Off</p>
              <p className="cross m-0">Rp 1.500.000</p>
              <p className="price">Rp 1.264.000</p>

              <div className="hovr">
                <button className="love">
                  <img src={Love} />
                </button>
                <button className="add_to_cart">add To Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container recent_news">
        <h1> Recent News</h1>
        <div className="row">
          <div className="col-xs-12 col-md-6 order-2 order-md-1 d-flex align-items-center">
            <div>
              <p className="text_light">Where To Travel</p>
              <h2 className="h2">
                Matoa Where To <br /> Travel? Yogyakarta
              </h2>
              <button className="btn">Discover</button>
            </div>
          </div>
          <div className="col-xs-12 col-md-6 order-1 order-md-2">
            <img src={Hand} style={{ width: "100%" }} />
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <div className="row">
          <div className="col-xs-12 col-md-4">
            <h1>Maple Series</h1>
            <div className="row">
              <div className="col-xs-12 col-sm-4 col-md-12 col-lg-6">
                <div className="box  ">
                  <img
                    src={Image7}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div>
              <div className="col-xs-12 col-sm-8 col-md-12 col-lg-6">
                <p>Way Kambas Maple</p>
                <p>
                  <strong>Rp 1.280.000</strong>
                </p>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-xs-12 col-sm-4 col-md-12 col-lg-6">
                <div className="box d-flex align-items-center justify-content-center">
                  <img
                    src={Image7}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div>
              <div className="col-xs-12 col-sm-8 col-md-12 col-lg-6">
                <p>Kaili </p>
                <p>
                  <strong>Rp 1.280.000</strong>
                </p>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-xs-12 col-sm-4 col-md-12 col-lg-6">
                <div className="box d-flex align-items-center justify-content-center">
                  <img
                    src={Image7}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div>
              <div className="col-xs-12 col-sm-8 col-md-12 col-lg-6">
                <p>Sunda</p>
                <p>
                  <strong>Rp 1.280.000</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-4">
            <h1>Ebony Series</h1>
            <div className="row">
              <div className="col-xs-12 col-sm-4 col-md-12 col-lg-6">
                <div className="box d-flex align-items-center justify-content-center">
                  <img
                    src={Image8}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div>
              <div className="col-xs-12 col-sm-8 col-md-12 col-lg-6">
                <p>Tomia Ebony</p>
                <p>
                  <strong>Rp 950.000</strong>
                </p>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-xs-12 col-sm-4 col-md-12 col-lg-6">
                <div className="box d-flex align-items-center justify-content-center">
                  <img
                    src={Image9}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div>
              <div className="col-xs-12 col-sm-8 col-md-12 col-lg-6">
                <p>Mori </p>
                <p>
                  <strong>Rp 950.000</strong>
                </p>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-xs-12 col-sm-4 col-md-12 col-lg-6">
                <div className="box d-flex align-items-center justify-content-center">
                  <img
                    src={Image10}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div>
              <div className="col-xs-12 col-sm-8 col-md-12 col-lg-6">
                <p>Alor</p>
                <p>
                  <strong>Rp 1.350.000</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="col-xs-12  col-md-4">
            <h1>Featured</h1>
            <div className="row">
              <div className="col-xs-12 col-sm-4 col-md-12 col-lg-6">
                <div className="box d-flex align-items-center justify-content-center">
                  <img
                    src={Image11}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div>
              <div className="col-xs-12 col-sm-8 col-md-12 col-lg-6">
                <p>Tomia Ebony</p>
                <p>
                  <strong>Rp 950.000</strong>
                </p>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-xs-12 col-sm-4 col-md-12 col-lg-6">
                <div className="box d-flex align-items-center justify-content-center">
                  <img
                    src={Image12}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div>
              <div className="col-xs-12 col-sm-8 col-md-12 col-lg-6">
                <p>Mori </p>
                <p>
                  <strong>Rp 950.000</strong>
                </p>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-xs-12 col-sm-4 col-md-12 col-lg-6">
                <div className="box d-flex align-items-center justify-content-center">
                  <img
                    src={Image8}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div>
              <div className="col-xs-12 col-sm-8 col-md-12 col-lg-6">
                <p>Alor</p>
                <p>
                  <strong>Rp 1.350.000</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container d-flex justify-content-between mt-4">
        <div className="wrapper">
          <button className="see_more mb-4">See More</button>
        </div>
      </div>

      <div className="container recent_news">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <img
              src={Image15}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </div>
          <div className="col-xs-12 col-md-6 d-flex align-items-center">
            <div>
              <h1> Testimonials</h1>
              <p>
                Loving my new KAILI watch from @matoa_id, the first ever
                Indonesian watch local brand that uses wood as their main
                material. Like any other Matoa products, KAILI is inspired by
                Indonesian heritage.
              </p>

              <h2 className="h2">Gita Savitri</h2>
              <p className="text_light"> Content Creator/Influencer</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container instagram mt-4">
        <h1>Instagram</h1>
        <div className="row">
          <div className="col">
            <img src={Image13} />
          </div>
          <div className="col">
            <img src={Image14} />
          </div>
          <div className="col">
            <img src={Image16} />
          </div>
          <div className="col">
            <img src={Image17} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Eccomerce;
