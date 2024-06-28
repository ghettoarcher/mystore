import Path from '../path/Path'

const AboutUs = () => {
      return(
            <>
            <Path secondPath={'About Us'} thirdPath={null}/>
            <section className='about-us'>
                  <div className="container">
                        <div className="about-us-content">
                            <img src="/src/assets/images/footer-img.svg" alt="" />
                            <div className="about-us-text">
                            <p>Tech Heim is an innovative online store that offers a diverse selection of digital gadgets, available for purchase in both cash and installment options. Embodying the motto "Join the digital revolution today" the website not only provides a seamless shopping experience but also features a captivating blog section filled with insightful reviews, articles, and videos about cutting-edge technology and digital gadgets. Users can actively engage with the content through comments and a question-answer section, fostering a dynamic community of tech enthusiasts. </p><br/>
                            <h5>Tech Heim Meaning</h5><br/>
                            <p> The name "Tech Heim" cleverly combines two languages (English & German), signifying a home of technology that provides all the essential tech products and services, making it a one-stop destination for tech-savvy individuals seeking the latest and most exciting gadgets.</p><br/>
                            <h5>Some of Tech Heim’s impressive features :</h5>
                            <p>Diverse digital gadgets for purchase in cash or instalments<br/>A blog with reviews and articles about the latest technology and gadgets<br/>User comments and Q&A section for community interaction<br/>Represents a tech-savvy "home" with all necessary technology<br/>Easy-to-use interface for a great user experience<br/>Consistent and visually appealing design<br/>A hub for tech enthusiasts to connect and share insights<br/>Helps users make informed purchase decisions</p>
                            </div>


                        </div>

                  </div>
            </section>
            </>
      )
}

export default AboutUs;