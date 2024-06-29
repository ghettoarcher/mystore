import Path from '../../components/path/Path';

const ContactUs = () => {
      return(
            <section className="contact-us">
                  <div className="container">
                  <Path secondPath={'Contact Us'}/>
                  <div className="contact-us-content mt-4 d-flex flex-row justify-content-center">
                        <div className="contact-item d-flex flex-column">
                              <img src="/src/assets/images/location-add.svg" alt="location" />
                              <div className="contact-title">Office</div>
                              <div className="contact-descr">123 Main Street,<br/> Anytown,USA</div>
                        </div>
                        <div className="contact-item d-flex flex-column">
                              <img src="/src/assets/images/location-add.svg" alt="location" />
                              <div className="contact-title">Office</div>
                              <div className="contact-descr">123 Main Street,<br/> Anytown,USA</div>
                        </div>
                        <div className="contact-item d-flex flex-column">
                              <img src="/src/assets/images/location-add.svg" alt="location" />
                              <div className="contact-title">Office</div>
                              <div className="contact-descr">123 Main Street,<br/> Anytown,USA</div>
                        </div>
                        
                  </div>
                  </div>
            </section>


      )
}

export default ContactUs;