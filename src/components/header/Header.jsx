export default function Header(){
      return(
      <header>
            <div className="container">
                  <div className="header-nav">
                  <div className="logo"><a href=""><img src="/src/img/logo.png" alt=""/></a></div>
                  <div className="nav">
                        <div><a href="">Home</a></div>
                        <div><a href="">Products</a></div>
                        <div><a href="">Blog</a></div>
                        <div><a href="">FAQ</a></div>
                        <div><a href="">Contact Us</a></div>
                  </div>
                  <div className="menu">
                  <a href="#"><img className="menu-icon search" src="/src/icons/search1.png" alt=""/></a>
                        <a href="#"><img className="menu-icon" src="/src/icons/cart.png" alt=""/></a>
                        <a href="#"><img className="menu-icon" src="/src/icons/user.png" alt=""/></a>

                  </div>
                  </div>

            </div>
    </header>
      )
}