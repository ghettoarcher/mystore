import UserMenu from './UserMenu';
import ProductsMenu from './ProductsMenu/ProductsMenu';
import { useEffect,useState } from 'react';
import SearchMenu from './SearchMenu/SearchMenu';

import {Link} from 'react-router-dom';

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
    
    
    const [productsIsOpen, SetProductsIsOpen] = useState(false);

    const toggleProductsMenu = () => {
    SetProductsIsOpen(!productsIsOpen);
    SetUserIsOpen(false);
    
    };
    
    const [userIsOpen, SetUserIsOpen] = useState(false);

    const toggleUserMenu = () => {
    SetUserIsOpen(!userIsOpen);
    SetProductsIsOpen(false);
    SetSearchMenuIsOpen(false);
    };

    const [searchIsOpen, SetSearchMenuIsOpen] = useState(false);

    const toggleSearchMenu = () => {
        SetSearchMenuIsOpen(!searchIsOpen);
        SetUserIsOpen(false);
        SetProductsIsOpen(false);
    }
    
    
    return (
    <header className="header">
               {/*<div className="overlay"></div>*/}
        <div className="container">

            <div className="header-nav">
                <button className="header-hamburger-btn" id="burger">
                    <span></span><span></span><span></span>
                </button>
                <div className="logo"><Link to="/"><img src="/src/icons/header/logo.svg" alt=""/></Link></div>
                <ul className="nav">
                    <li><Link to="/">Home</Link></li>
                    <li><a href="" onClick={(e) => {e.preventDefault(); toggleProductsMenu();}}>Products</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">FAQ</a></li>
                    <li><a href="">Contact Us</a></li>
                </ul>
                <div className="menu">
                    <a href="#"><img onClick ={toggleSearchMenu}className="menu-icon search" src="/src/icons/header/search.svg" alt=""/></a>

                    <a href="#"><img className="menu-icon" src="/src/icons/header/cart.svg" alt=""/></a>
                    <a href="#"><img  onClick={toggleUserMenu}className="menu-icon" src="/src/icons/header/user.svg" alt=""/></a>
                </div>
                {userIsOpen &&(
                    <UserMenu/>
                )}
            </div>
            {searchIsOpen && <SearchMenu/>}

            <div className="search-field">
                    <input type="text" placeholder='What we can help you to find?'/> <img src="src/icons/header/search.svg" alt="" />
                </div>
                {productsIsOpen && (
                    <ProductsMenu/>
                    )}
        </div>

    </header>
    );
}


