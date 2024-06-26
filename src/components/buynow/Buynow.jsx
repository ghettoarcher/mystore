const Buynow = () => {
      return(
            <div className="buynow d-flex position-relative flex-column justify-content-between rounded-2">
            <div className="buynow-title text-center fs-4">Play Station 5</div>
            <img className="buy-now-img position-absolute end-0 z-1" src="/src/assets/images/ps53.svg" alt="playstation5 image" />
            <div className='buynow-nav d-flex flex-column'>                        
                  <div className="buynow-text z-1">Digital Edition + 2TB</div>
                  <div className="buynow-button button btn">Buy now</div>
            </div>
            <img src="src/img/hotdeals/ellipse.svg" className='ellipse' />
      </div>
      )

};

export default Buynow;