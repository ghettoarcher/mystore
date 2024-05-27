
const ProductsMenu = () => {
      return(
            <div className="products-menu m-0 p-0 z-2 rounded-2">
                    <ul className="d-flex flex-column flex-wrap p-0 m-0">
                        <li><img src="src/icons/products-menu/mobile.svg" alt="Mobile Phones" className='products-menu-icon'/><a href="#">Mobile Phones</a></li>
                        <li><img src="src/icons/products-menu/monitor.svg" alt="Laptops & Computers" className='products-menu-icon'/><a href="#">Laptops & Computers</a></li>
                        <li><img src="src/icons/products-menu/mobile.svg" alt="Tablets & E-reader" className='products-menu-icon'/><a href="#">Tablets & E-reader</a></li>
                        <li><img src="src/icons/products-menu/watch.svg" alt="Wearables" className='products-menu-icon'/><a href="#">Wearables</a></li>
                        <li><img src="src/icons/products-menu/headphone.svg" alt="Audio" className='products-menu-icon'/><a href="#">Audio</a></li>
                        <li><img src="src/icons/products-menu/camera.svg" alt="Cameras" className='products-menu-icon'/><a href="#">Cameras</a></li>
                        <li><img src="src/icons/products-menu/game.svg" alt="Gaming" className='products-menu-icon'/><a href="#">Gaming</a></li>
                        <li><img src="src/icons/products-menu/data.svg" alt="Networking" className='products-menu-icon'/><a href="#">Networking</a></li>
                        <li><img src="src/icons/products-menu/devices.svg" alt="Accessories" className='products-menu-icon'/><a href="#">Accessories</a></li>
                        <li><img src="src/icons/products-menu/mobile.svg" alt="Mobile Phones" className='products-menu-icon'/><a href="#">Mobile Phones</a></li>
                        <li><img src="src/icons/products-menu/mobile.svg" alt="Mobile Phones" className='products-menu-icon'/><a href="#">Mobile Phones</a></li>
                        <a href="">View All</a>
                        <div className="products-menu-cards d-flex flex-row justify-content-center">
                        <div className="products-menu-card">
                            <img className='products-menu-card-img' src="src/img/products-menu/watch&earpods.svg" alt="" />
                            <div className="product-menu-card__name">Watch & Earpods</div>
                        </div>
                        <div className="products-menu-card">
                            <img className='products-menu-card-img' src="src/img/products-menu/holder.svg" alt="" />
                            <div className="products-menu-card__name">Watch & Earpods</div>
                        </div>
                        <div className="products-menu-card">
                            <img className='products-menu-card-img' src="src/img/products-menu/power-cables.svg" alt="" />
                            <div className="products-menu-card__name">Watch & Earpods</div>
                        </div>
                        <div className="products-menu-card">
                            <img className='products-menu-card-img' src="src/img/products-menu/cases.svg" alt="" />
                            <div className="products-menu-card__name">Watch & Earpods</div>
                        </div>
                    </div>
                    </ul>

                    </div>
      )
}

export default ProductsMenu;