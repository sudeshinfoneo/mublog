import React from "react";


const Footer = () => {
    return (
        <>
            <footer className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-6 col-sm-6 mb-4 mb-xl-0 single-footer-widget">
                            <h4>About Us</h4>
                            <p>Heaven fruitful doesn't over the lesser days appear creeping seasons so behold bea Place likeness female form. Lesser was the green image lights fowl.</p>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-sm-6 mb-4 mb-xl-0 single-footer-widget">
                            <h4>Contact Info</h4>
                            <ul>
                                <li><p>Address: Your address goes here, your demo address.</p></li>
                                <li><p>Phone: +8880 44338899</p></li>
                                <li><p>Email: <a href="mailto:info@example.com">info@example.com</a></p></li>
                            </ul>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-sm-6 mb-4 mb-xl-0 single-footer-widget">
                            <h4>Important Links</h4>
                            <ul>
                                <li><a href="#">WHMCS-bridge</a></li>
                                <li><a href="#">Search Domain</a></li>
                                <li><a href="#">My Account</a></li>
                                <li><a href="#">Shopping Cart</a></li>
                                <li><a href="#">Our Main Shop</a></li>
                            </ul>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-sm-6 mb-4 mb-xl-0 single-footer-widget">
                            <h4>Newsletter</h4>
                            <p>Heaven fruitful doesn't over lesser in days. Appear creeping seasons behold bearing days open</p>
                            <div className="form-wrap" id="mc_embed_signup">
                                <form target="_blank" method="get" className="form-inline">
                                    <input
                                        className="form-control"
                                        name="EMAIL"
                                        placeholder="Your Email Address"
                                        required
                                        type="email" />
                                        <button type="button" className="btn btn-sm" style={{color: 'white', background: 'Green'}}>Sub</button>                                    
                                </form>
                            </div>
                        </div>
                    </div>
                   </div>                  
            </footer>
        </>
    );
};

export default Footer;
