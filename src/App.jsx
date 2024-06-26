import { Routes, Route } from 'react-router-dom';
import Account from './Pages/Account/Account';
import Homepage from './Pages/Homepage/Homepage';
import Layout from './components/Layout';
import PersonalData from './components/AccountSettings/PersonalData/PersonalData';
import Payments from './components/AccountSettings/Payments/Payments';
import Orders from './components/AccountSettings/Orders/Orders';
import Wishlist from './components/AccountSettings/Wishlist/Wishlist';
import Discounts from './components/AccountSettings/Discounts/Discounts';
import Security from './components/AccountSettings/Security/Security';
import Notification from './components/AccountSettings/Notification/Notification';
import Contacts from './components/AccountSettings/Contacts/Contacts';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path='account' element={<Account />}>
          <Route path='personal-data' element={<PersonalData />} />
          <Route path='payments' element={<Payments />} />
          <Route path='orders' element={<Orders />} />
          <Route path= 'wishlist' element={<Wishlist/>}/>
          <Route path= 'discounts' element={<Discounts/>}/>
          <Route path= 'security' element={<Security/>}/>
          <Route path= 'notification' element={<Notification/>}/>
          <Route path= 'contacts' element={<Contacts/>}/>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
