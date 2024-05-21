import { Outlet } from 'react-router-dom';
import Path from '../../components/path/Path';
import AccountSettings from '../../components/AccountSettings/AccountSettings';

const Account = () => {
  return (
    <>
      <Path />
      <AccountSettings />
      <Outlet />
    </>
  );
};

export default Account;
