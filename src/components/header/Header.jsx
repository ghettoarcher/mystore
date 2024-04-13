export default function Header(){
      return(
      <header>
            <div className="container">
                  <div className="logo"><img src="/src/img/logo.png" alt=""/></div>
                  <div className="nav">
                        <div>Home</div>
                        <div>Products</div>
                        <div>Blog</div>
                        <div>FAQ</div>
                        <div>Contact Us</div>
                  </div>
                  <div className="menu">
                        <a href="#"><img src="/src/img/search.png" alt="" /> </a>
                        <a href="#"><img src="/src/img/basket.png" alt="" /></a>
                        <a href="#"><img src="/src/img/profile.png" alt="" /></a>

                  </div>
            </div>
    </header>
      )
}