

import {Link} from 'react-router-dom';

const UserMenu = () =>{
      return(
            <div className="userMenu z-2 rounded-2 p-3">
            <ul className='d-flex flex-column justify-content-center list-unstyled'>
                  <li>
                        <img src="src/icons/user-menu/profile-circle.svg" alt="Mobile Phones" className='products-menu-icon'/>
                        <Link to="account">
                              <span className='userMenu__name fw-300'>Adnan Al-Ezari</span> <br/> 
                              <span className='userMenu__email fw-300'>adnan30062000@gmail.com</span>
                        </Link>
                  </li>
                  <li><img src="src/icons/user-menu/bag-2.svg" alt="Laptops & Computers" className='products-menu-icon'/><a href="#">Orders</a></li>
                  <li><img src="src/icons/user-menu/heart.svg" alt="Tablets & E-reader" className='products-menu-icon'/><a href="#">Wishlist</a></li>
                  <li><img src="src/icons/user-menu/dollar-circle.svg" alt="Wearables" className='products-menu-icon'/><a href="#">Payments</a></li>
                  <li><img src="src/icons/user-menu/logout.svg" alt="Wearables" className='products-menu-icon'/><a href="#">Logout</a></li>
            </ul>
            </div>
      )
}

export default UserMenu;