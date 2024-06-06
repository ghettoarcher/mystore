import { Link, Outlet } from 'react-router-dom';
import AccountSettingsItem from '../AccountSettings/AccountSettingsItem';

const AccountSettings = () => {
  return (
    <div className="account-settings">
      <div className="account-settings-content">
        <AccountSettingsItem text="Adnan Al-Ezari" img="src/assets/icons/account-icon.svg" />
        <Link className='link' to="/account/personal-data">
          <AccountSettingsItem text="Personal Data" img="src/assets/icons/user-edit.svg" />
        </Link>
        <Link className='link' to="/account/payments">
          <AccountSettingsItem text="Payments & Instalments" img="src/assets/icons/dollar-circle.svg" />
        </Link>
        <Link className='link' to="/account/orders">
          <AccountSettingsItem text="Orders" img="src/assets/icons/bag.svg" />
        </Link>
        <AccountSettingsItem text="Wish list" img="src/assets/icons/heart.svg" />
        <AccountSettingsItem text="Discounts" img="src/assets/icons/gift.svg" />
        <AccountSettingsItem text="Security & access" img="src/assets/icons/security-safe.svg" />
        <AccountSettingsItem text="Notification" img="src/assets/icons/notification.svg" />
        <AccountSettingsItem text="Contact Us" img="src/assets/icons/24-support.svg" />
        <AccountSettingsItem text="Log Out" img="src/assets/icons/logout.svg" />
      </div>
      <div className="account-settings-details">
        <Outlet />
      </div>
    </div>
  );
};

export default AccountSettings;
