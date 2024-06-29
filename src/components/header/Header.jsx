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
    <header className="header border-bottom pt-3 z-index-5">
               {/*<div className="overlay"></div>*/}
        <div className="container">

            <div className="header-nav d-flex flex-row justify-content-center align-items-center">
                <button className="header-hamburger-btn d-none" id="burger">
                    <span></span><span></span><span></span>
                </button>
                <div className="logo"><Link to="/"><img src="/src/assets/icons/logo.svg" alt=""/></Link></div>
                <ul className="nav col d-flex justify-content-center me-4 gap-5 fs-5 fw-light border-0  ">
                    <li><Link to="/">Home</Link></li>
                    <li><a onClick={(e) => {e.preventDefault(); toggleProductsMenu();}}>Products</a></li>
                    <li><Link to={'blog'}>Blog</Link></li>
                    <li><a>FAQ</a></li>
                    <li><a>Contact Us</a></li>
                </ul>
                <div className="menu d-flex gap-3">
                    <a><img onClick ={toggleSearchMenu}className="menu-icon search" src="/src/assets/icons/search.svg" alt=""/></a>

                    <a ><img className="menu-icon" src="/src/assets/icons/bag.svg" alt=""/></a>
                    <a href="#"><img  onClick={toggleUserMenu}className="menu-icon" src="/src/assets/icons/user-black.svg" alt=""/></a>
                </div>
                {userIsOpen &&(
                    <UserMenu/>
                )}
            </div>
            {searchIsOpen && <SearchMenu/>}

            <div className="search-field d-none px-3 mb-4 rounded-2 bg-light">
                    <input className='b-none'type="text" placeholder='What we can help you to find?'/> <img src="/src/assets/icons/search-normal.svg" alt="" />
                </div>
                {productsIsOpen && (
                    <ProductsMenu/>
                    )}
        </div>

    </header>
    );
}


