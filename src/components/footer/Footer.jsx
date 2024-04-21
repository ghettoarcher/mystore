export default function Footer(){
      return(
            <section className="footer">
                  <div className="container">
                        <div className="footer-content">
                              <div className="footer-column">
                                    <div className="footer-column-item semi-bold"><a href="">Company</a></div>
                                    <div className="footer-column-item"><a href="">About us</a></div>
                                    <div className="footer-column-item"><a href="">Blog</a></div>
                                    <div className="footer-column-item"><a href="">Returns</a></div>
                                    <div className="footer-column-item"><a href="">Order status </a></div>
                              </div>
                              <div className="footer-column">
                                   <div className="footer-column-item semi-bold"><a href="">Info</a></div>
                                    <div className="footer-column-item"><a href="">How it works?</a></div>
                                    <div className="footer-column-item"><a href="">our promises</a></div>
                                    <div className="footer-column-item"><a href="">FAQ</a></div>
                              </div>
                              <div className="footer-column">
                                    <div className="footer-column-item semi-bold">Contact us</div>
                                    <div className="footer-column-item"><img className= "footer-column-icon" src="src/icons/footer/location.png" alt=""/> <a href="#">123 Main Street, Anytown,USA</a></div>
                                    <div className="footer-column-item"><img className= "footer-column-icon" src="src/icons/footer/call.png" alt="" /><a href="#">+1 (555) 123-4567</a> </div>
                                    <div className="footer-column-item"><img className= "footer-column-icon" src="src/icons/footer/mail.png" alt="" /><a href="#">TechHeimSupport@gmail.com</a></div>
                              </div> 
                              <div className="footer-column"> 
                                    <div className="footer-column-item semi-bold">Sign up for News and updates</div>
                                    <div className="footer-column-input"><img src="src/icons/footer/user.png" alt="" /><input type="text" placeholder="E-mail Address"/><img src="src/icons/footer/arrow-right.png" alt="" /></div>
                                    <div className="footer-column-socials">
                                    <a href="#"><img src="src/icons/footer/facebook.png" alt="facebook" className="socials"/></a>
                                    <a href="#"><img src="src/icons/footer/twitter.png" alt="twitter" className="socials"/></a>
                                    <a href="#"><img src="src/icons/footer/instagram.png" alt="instagram" className="socials"/></a>
                                    <a href="#"><img src="src/icons/footer/youtube.png" alt="youtube" className="socials"/></a>
                                    </div>
                              </div>
                              <div className="footer-icons">
                              <a href="#"><img src="src/icons/footer/online-chat.png" alt="" className="online-chat" /></a>
                              <a href="#"><img src="src/icons/footer/totop.png" alt="" className="arrowToTop" /></a>
                              </div>

                              

                              
                        </div>
                        <div className="paymethods">
                                    <img src="src/icons/footer/paypal.png" alt="" />
                                    <img src="src/icons/footer/american-express.png" alt="" />
                                    <img src="src/icons/footer/visa.png" alt="" />
                                    <img src="src/icons/footer/mastercard.png" alt="" />
                        </div>
                        <div className="copyright">
                              <div className="copyright-icon"><img className="copyright-icon" src="src/icons/footer/copyright.png" alt=""/><div className="copyright-icon-text">2023 Tech Heim.</div></div>
                              
                              <div className="copyright-content">
                                    <div className="copyright-item"><a href="">cookie settings</a></div>
                                    <div className="copyright-item"><a href="">Privacy Policy</a></div>
                                    <div className="copyright-item"><a href="">Terms and Conditions</a></div>
                                    <div className="copyright-item"><a href="">Imprint</a></div>
                              </div>
                        </div>
                  </div>
            </section>
      )
}