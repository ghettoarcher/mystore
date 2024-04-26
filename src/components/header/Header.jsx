import { useEffect } from 'react';

export default function Header() {
    useEffect(() => {
        const handleClick = () => {
            document.querySelector(".header-nav").classList.toggle("open");
        };

        document.getElementById("burger").addEventListener("click", handleClick);

        // Cleanup: удалить обработчик события при размонтировании компонента
        return () => {
            document.getElementById("burger").removeEventListener("click", handleClick);
        }
    }, []); // Пустой массив зависимостей означает, что useEffect будет запускаться только после первого рендера

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
                        <li><a href="">Products</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">FAQ</a></li>
                        <li><a href="">Contact Us</a></li>
                    </ul>
                    <div className="menu">
                        <a href="#"><img className="menu-icon search" src="/src/icons/search1.png" alt=""/></a>
                        <a href="#"><img className="menu-icon" src="/src/icons/cart.png" alt=""/></a>
                        <a href="#"><img className="menu-icon" src="/src/icons/user.png" alt=""/></a>
                    </div>
                    
                </div>
                <div className="search-field">
                        <input type="text" placeholder='What we can help you to find?'/> <img src="src/icons/header/search.svg" alt="" />
                    </div>
            </div>
        </header>
    );
}
