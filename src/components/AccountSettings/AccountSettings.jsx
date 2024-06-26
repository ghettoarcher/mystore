import { Link, Outlet } from 'react-router-dom';
import AccountSettingsItem from '../AccountSettings/AccountSettingsItem';

const AccountSettings = () => {
  return (
    <div className="account-settings">
      <div className="account-settings-content">
        <AccountSettingsItem text="Adnan Al-Ezari" img="/src/assets/icons/account-icon.svg" />
        
        <Link className='link' to="/account/personal-data">
          <AccountSettingsItem text="Personal Data" img="/src/assets/icons/user-edit.svg" />
        </Link>

        <Link className='link' to="/account/payments">
          <AccountSettingsItem text="Payments & Instalments" img="/src/assets/icons/dollar-circle.svg" />
        </Link>

        <Link className='link' to="/account/orders">
          <AccountSettingsItem text="Orders" img="/src/assets/icons/bag.svg" />
        </Link>

        <Link className='link' to="/account/wishlist">
        <AccountSettingsItem text="Wishlist" img="/src/assets/icons/heart.svg" />
        </Link>

        <Link className='link' to='/account/discounts'>
        <AccountSettingsItem text="Discounts" img="/src/assets/icons/gift.svg" />
        </Link>

        <Link className='link' to='/account/security'>
        <AccountSettingsItem text="Security & access" img="/src/assets/icons/security-safe.svg" />

        </Link>

        <Link className='link' to='/account/notification'>
        <AccountSettingsItem text="Notification" img="/src/assets/icons/notification.svg" />

        </Link>

        <Link className='link' to='/account/contacts'>
        <AccountSettingsItem text="Contact Us" img="/src/assets/icons/24-support.svg" />

        </Link>

        <Link className='link' to='/account/discounts'>
        <AccountSettingsItem text="Log Out" img="/src/assets/icons/logout.svg" />

        </Link>


        
      </div>
      <div className="account-settings-details">
        <Outlet />
      </div>
    </div>
  );
};

export default AccountSettings;
