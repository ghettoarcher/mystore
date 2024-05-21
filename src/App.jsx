import { Routes, Route } from 'react-router-dom';
import Account from './Pages/Account/Account';
import Homepage from './Pages/Homepage/Homepage';
import Layout from './components/Layout';
import PersonalData from './components/AccountSettings/PersonalData/PersonalData';
import Payments from './components/AccountSettings/Payments/Payments';
import Orders from './components/AccountSettings/Orders/Orders';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path='account' element={<Account />}>
          <Route path='personal-data' element={<PersonalData />} />
          <Route path='payments' element={<Payments />} />
          <Route path='orders' element={<Orders />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
