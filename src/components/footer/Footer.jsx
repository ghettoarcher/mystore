import PayMethods from '../PayMethods/PayMethods';
import Copyright from './Copyright/Copyright';
import Socials from './Socials/Socials';
import SignUpField from './SignUpField/SignUpField';
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
                                    <div className="footer-column-item"><img className= "footer-column-icon" src="src/icons/footer/location.svg" alt=""/> <a href="#">123 Main Street, Anytown,USA</a></div>
                                    <div className="footer-column-item"><img className= "footer-column-icon" src="src/icons/footer/call.svg" alt="" /><a href="#">+1 (555) 123-4567</a> </div>
                                    <div className="footer-column-item"><img className= "footer-column-icon" src="src/icons/footer/mail.svg" alt="" /><a href="#">TechHeimSupport@gmail.com</a></div>
                              </div> 
                              <div className="footer-column"> 
                                    <SignUpField/>
                                    <Socials/>
                              </div>
                              <div className="footer-icons">
                              <a href="#"><img src="src/icons/footer/chat-icon.svg" alt="" className="online-chat" /></a>
                              <a href="#"><img src="src/icons/footer/back-to-top.svg" alt="" className="arrowToTop" /></a>
                              </div>  
                        </div>
                        <PayMethods/>
                        <Copyright/>
                  </div>
            </section>
      )
}
