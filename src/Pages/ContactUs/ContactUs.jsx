import Path from '../../components/path/Path';

const ContactUs = () => {
      return(
            <section className="contact-us">
                  <div className="container">
                  <Path secondPath={'Contact Us'}/>
                  <div className="contact-us-items mt-4 d-flex flex-row justify-content-evenly">
                        <div className="contact-item d-flex flex-column">
                              <img src="/src/assets/images/location-add.svg" alt="location" />
                              <div className="contact-title">Office</div>
                              <div className="contact-descr">123 Main Street,<br/> Anytown, USA</div>
                        </div>
                        <div className="contact-item d-flex flex-column">
                              <img src="/src/assets/images/sms.svg" alt="location" />
                              <div className="contact-title">Email</div>
                              <div className="contact-descr">info@techheim.com</div>
                        </div>
                        <div className="contact-item d-flex flex-column">
                              <img src="/src/assets/images/call-incoming.svg" alt="location" />
                              <div className="contact-title">Phone</div>
                              <div className="contact-descr">+1 (555) 123-4567</div>
                        </div>
                  </div>
                  <div className='message-wrapper d-flex flex-row align-items-center justify-content-evenly'>
                  <div className="message-text d-flex flex-column gap-3">
                        <div className="message-title fw-medium">Message us</div>
                        <div className="message-subtitle fw-light">We re here to assist you every step of the way. Whether you have a question, need technical support, or simply want to share your feedback, our dedicated team is ready to listen and provide prompt assistance.</div>
                  </div>
                  <div className="message-form d-flex flex-column gap-3 justify-content-end"> 
                  <input className='input' type="text" placeholder=' * Your name'/> 
                  <input className='input' type="text" placeholder=' * Email'/>
                  <input id='message'className='input' type="text" placeholder='Message '/>
                  <div className="button btn">Submit</div>
                  </div>
                  </div>

                  </div>
            </section>


      )
}

export default ContactUs;