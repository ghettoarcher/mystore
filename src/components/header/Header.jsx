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
                        <a href="#"><img src="/src/img/search.png" alt=""/></a>
                        <a href="#"><img src="/src/img/basket.png" alt=""/></a>
                        <a href="#"><img src="/src/img/profile.png" alt=""/></a>

                  </div>
                  </div>

            </div>
    </header>
      )
}