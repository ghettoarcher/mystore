import { useEffect,useState } from 'react';


export default function Header() {
    useEffect(() => {
        const handleClick = () => {
            document.querySelector(".header-nav").classList.toggle("open");
        };

        document.getElementById("burger").addEventListener("click", handleClick);
        return () => {
            document.getElementById("burger").removeEventListener("click", handleClick);
        }
    }, []);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
    
    return (
        <header className="header">
            <div className="container">
                <div className="header-nav">
                    <button className="header-hamburger-btn" id="burger">
                        <span></span><span></span><span></span>
                    </button>
                    <div className="logo"><a href=""><img src="/src/icons/header/logo.svg" alt=""/></a></div>
                    <ul className="nav">
                        <li><a href="">Home</a></li>
                        <li><a href="" onClick={(e) => {e.preventDefault(); toggleMenu();}}>Products</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">FAQ</a></li>
                        <li><a href="">Contact Us</a></li>
                    </ul>
                    <div className="menu">
                        <a href="#"><img className="menu-icon search" src="/src/icons/header/search.svg" alt=""/></a>
                        <a href="#"><img className="menu-icon" src="/src/icons/header/cart.svg" alt=""/></a>
                        <a href="#"><img className="menu-icon" src="/src/icons/header/user.svg" alt=""/></a>
                    </div>
                    
                </div>
                <div className="search-field">
                        <input type="text" placeholder='What we can help you to find?'/> <img src="src/icons/header/search.svg" alt="" />
                    </div>
                    {isOpen && (
                        <div className="dropdown-content">
                        <ul>
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
                            <div className="products-menu-cards">
                            <div className="products-menu-card">
                                <img className='products-menu-card-img' src="src/img/products-menu/watch&earpods.svg" alt="" />
                                <div className="product-menu-card__name">Watch & Earpods</div>
                            </div>
                            <div className="products-menu-card">
                                <img className='products-menu-card-img' src="src/img/products-menu/watch&earpods.svg" alt="" />
                                <div className="product-menu-card__name">Watch & Earpods</div>
                            </div>
                            <div className="products-menu-card">
                                <img className='products-menu-card-img' src="src/img/products-menu/watch&earpods.svg" alt="" />
                                <div className="product-menu-card__name">Watch & Earpods</div>
                            </div>
                            <div className="products-menu-card">
                                <img className='products-menu-card-img' src="src/img/products-menu/watch&earpods.svg" alt="" />
                                <div className="product-menu-card__name">Watch & Earpods</div>
                            </div>
                        </div>
                        </ul>

                        </div>
                         )}
            </div>

        </header>
        
    );
}


