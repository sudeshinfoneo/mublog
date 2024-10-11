import React, { useState } from "react";
import Insta1 from "../../assets/img/instagram_1.png.webp";
import Insta2 from "../../assets/img/instagram_2.png.webp";
import Insta3 from "../../assets/img/instagram_3.png.webp";

const Home = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribed with:", { name, email });
    setName("");
    setEmail("");
  };

  return (
    <>
      <div className="banner-post mt-4">
        <div className="container-fluid">
          <div className="row justify-content-between">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 mb-4">
              <div className="banner_post_1 banner_post_bg_1">
                <div className="banner_post_iner text-center">
                  <img src={Insta1} alt="Instagram 1" />
                  <h5>Fashion / Life style</h5>
                  <h3>This is my first Blog</h3>
                  <p>Posted on April 15, 2019</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 mb-4">
              <div className="banner_post_2 banner_post_bg_2">
                <div className="banner_post_iner text-center">
                  <img src={Insta2} alt="Instagram 2" />
                  <h5>Fashion / Life style</h5>
                  <h3>This is my first Blog</h3>
                  <p>Posted on April 15, 2019</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 mb-4">
              <div className="banner_post_3 banner_post_bg_3">
                <div className="banner_post_iner text-center">
                  <img src={Insta3} alt="Instagram 3" />
                  <h5>Fashion / Life style </h5>
                  <h3>This is my first Blog</h3>
                  <p>Posted on April 15, 2019</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="subscribe_form">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="subscribe_form_iner">
                <form onSubmit={handleSubscribe}>
                  <div className="form-row align-items-center justify-content-center">
                    <div className="col-md-12 col-lg-3">
                      <h3>Subscribe Our Newsletter</h3>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                      <button type="submit" className="btn_1">Subscribe</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
