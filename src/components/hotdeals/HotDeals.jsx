// import Countdown from '../countdown/Countdown';
import Buynow from '../buynow/Buynow';
import Countdown from 'react-countdown';

export default function HotDeals(){
      return(
            <section className="hotdeals mb-5">
                  <div className="container">
                        <div className="hotdeals-content d-flex flex-row justify-content-between">
                        <div className="presale d-flex flex-row rounded-2 ">
                  <div className="presale-title-wrapper d-flex flex-column p-4 position-relative">
                  <img src="src/img/hotdeals/circle.svg" alt="" className='circle1' />
                  <img src="src/img/hotdeals/circle.svg" alt="" className='circle2' />

                        <div className="presale-title fs-4 fw-normal z-2"> <span>Iphone</span> 15 Series</div>
                        <img className="presale-img z-2" src="/src/img/hotdeals/iphone.svg" alt=""/>
                        {/* <img className="dots position-absolute start-0 bottom-0" src="/src/img/hotdeals/dots.svg" alt=""/> */}

                  </div>
                        <div className="presale-info d-flex flex-column position-relative pt-5 gap-4">
                              
                        <Countdown className='fs-4 text-center'date={Date.now() + 1000000} />
                              <div className='presale-text'>
                              <div className="presale-subtitle text-center fw-normal">It feels good to be the first</div>
                              <div className="presale-description fw-light fs-6">Get ready for the future of smartphones.Experience innovation like never before. Stay tuned for the big iPhone 15 pre-sale.</div>
                              <img src="src/img/hotdeals/circle.svg" alt="" className='circle3' />
                              </div>
                              
                              <div className="button btn fs-6 fw-normal py-2 px-3 rounded-2">Register Now</div>
                        </div>
                        </div>
                              <Buynow/>
                        </div>
                  </div>

      </section>
      )
}