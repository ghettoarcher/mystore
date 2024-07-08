import Path from '../../components/path/Path';

const FAQ = () => {

      return(
            <div className="faq">
                  <div className="container">
                        <Path secondPath={'FAQ'}/>
                        <img className='faq-img mt-5' src="/src/assets/images/faq.svg" alt="" />
                        <div className="faq-content d-flex flex-row justify-content-around">
                        
                              <div className="faq-sections">
                              <h5>Table of Contents</h5>
                                    <p>General</p>
                                    <p>Trusty & Safety</p>
                                    <p>Services</p>
                                    <p>Billing</p> 
                              </div>
                              <div className="faq-questions">
                                    <div className="faq-item">
                                          <p>Can I purchase products from Tech Heim using installment payments?</p>
                                          <img src="/src/assets/icons/arrow-down.svg" alt="" />

                                    </div>
                                    <div className="faq-item">
                                          <p>How can I engage with the magazine content on Tech Heim?</p>
                                          <img src="/src/assets/icons/arrow-down.svg" alt="" />
                                    </div>
                                    <div className="faq-item">
                                          <p>Does Tech Heim offer a warranty on its products?</p>
                                          <img src="/src/assets/icons/arrow-down.svg" alt="" />
                                    </div>
                                    <div className="faq-item">
                                          <p>Is Tech Heim a secure platform for online shopping?</p>
                                          <img src="/src/assets/icons/arrow-down.svg" alt="" />
                                    </div>
                                    <div className="faq-item">
                                          <p>How can I get assistance with my purchase or any other inquiries?</p>
                                          <img src="/src/assets/icons/arrow-down.svg" alt="" />
                                    </div>
                              </div>

                        </div>
                  </div>
            </div>
      )
}

export default FAQ;