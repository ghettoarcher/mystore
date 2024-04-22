import Countdown from '../countdown/Countdown';

export default function HotDeals(){
      return(
            <section className="hotdeals">
                  <div className="container">
                        <div className="hotdeals-content">
                        <div className="presale">
                  <div className="presale-title-wrapper">
                        <div className="presale-title"> <span>Iphone</span> 15 Series</div>
                        <img className="presale-img" src="/src/img/feature/iphone.png" alt=""/>
                  </div>
                        <div className="presale-info">
                              <Countdown/>
                              <div className="presale-subtitle">It feels good to be the first</div>
                              <div className="presale-description">Get ready for the future of smartphones.Experience innovation like never before. Stay tuned for the big iPhone 15 pre-sale.</div>
                              <div className="button">Register Now</div>
                        </div>
                        </div>
                  <div className="buynow">
                        <div className="buynow-title">Play Station 5</div>
                        <img className="buy-now-img" src="/src/img/ps53.png" alt="" />
                        <div className="buynow-text">Digital Edition + 2TB</div>

                        <div className="buynow-button button">Buy now</div>
                  </div>
                        </div>
                  </div>

      </section>
      )
}