import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const UserMenu = () => {
  const [menuVisible, setMenuVisible] = useState(true);
  const menuRef = useRef(null);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      {menuVisible && (
        <div ref={menuRef} className="userMenu z-2 rounded-2 p-3">
          <ul className='d-flex flex-column justify-content-center list-unstyled'>
            <li>
              <img src="/src/assets/icons/profile-circle.svg" alt="Profile" className='products-menu-icon'/>
              <Link to="account/personal-data">
                <span className='userMenu__name fw-300'>Adnan Al-Ezari</span> <br/> 
                <span className='userMenu__email fw-300'>adnan30062000@gmail.com</span>
              </Link>
            </li>

            <Link to='account/orders'>
              <li>
                <img src="/src/assets/icons/bag.svg" alt="Orders" className='products-menu-icon'/>
                Orders
              </li>
            </Link>
            <Link to='account/wishlist'>
              <li>
                <img src="/src/assets/icons/heart.svg" alt="Wishlist" className='products-menu-icon'/>
                Wishlist
              </li>
            </Link>
            <Link to="account/payments">
                <li>
                  <img src="/src/assets/icons/dollar-circle.svg" alt="Payments" className='products-menu-icon'/>
                  Payments
                </li>
            </Link>

            <li>
              <img src="/src/assets/icons/logout.svg" alt="Logout" className='products-menu-icon'/>
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserMenu;