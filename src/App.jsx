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
import AboutUs from './components/AboutUs/AboutUs';
import Blog from './Pages/Blog/Blog';
import ContactUs from './Pages/ContactUs/ContactUs';
import BlogPage from './Pages/Blog/BlogPage/BlogPage';
import FAQ from './Pages/FAQ/FAQ';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path='blog' element={<Blog />} />
        <Route path='blog/blog-page' element={<BlogPage />} />
        <Route path='account' element={<Account />}>
          <Route path='personal-data' element={<PersonalData />} />
          <Route path='payments' element={<Payments />} />
          <Route path='orders' element={<Orders />} />
          <Route path='wishlist' element={<Wishlist />} />
          <Route path='discounts' element={<Discounts />} />
          <Route path='security' element={<Security />} />
          <Route path='notification' element={<Notification />} />
          <Route path='contacts' element={<Contacts />} />
        </Route>
        <Route path='about-us' element={<AboutUs />} />
        <Route path='contact-us' element={<ContactUs />} />
        <Route path='faq' element={<FAQ/>}/>
      </Route>
    </Routes>
  );
}

export default App;
