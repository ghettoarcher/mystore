import Countdown from '../countdown/Countdown';

export default function HotDeals(){
      return(
            <section className="hotdeals">
                  <div className="container">
                        <div className="hotdeals-content">
                        <div className="presale">
                  <div className="presale-title-wrapper">
                  <img src="src/img/hotdeals/circle.svg" alt="" className='circle1' />
                  <img src="src/img/hotdeals/circle.svg" alt="" className='circle2' />

                        <div className="presale-title"> <span>Iphone</span> 15 Series</div>
                        <img className="presale-img" src="/src/img/hotdeals/iphone.svg" alt=""/>
                        <img className="dots" src="/src/img/hotdeals/dots.svg" alt=""/>

                  </div>
                        <div className="presale-info">
                              <Countdown/>
                              <div className='presale-text'>
                              <div className="presale-subtitle">It feels good to be the first</div>
                              <div className="presale-description">Get ready for the future of smartphones.Experience innovation like never before. Stay tuned for the big iPhone 15 pre-sale.</div>
                              <img src="src/img/hotdeals/circle.svg" alt="" className='circle3' />
                              </div>
                              
                              <div className="button">Register Now</div>
                        </div>
                        </div>
                  <div className="buynow">
                        <div className="buynow-title">Play Station 5</div>
                        <img className="buy-now-img" src="/src/img/hotdeals/ps53.svg" alt="playstation5 image" />
                        <div className='buynow-nav'>                        
                              <div className="buynow-text">Digital Edition + 2TB</div>
                              <div className="buynow-button button">Buy now</div>
                        </div>
                        <img src="src/img/hotdeals/ellipse.svg" className='ellipse' />
                  </div>
                        </div>
                  </div>

      </section>
      )
}