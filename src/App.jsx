import {Routes,Route} from 'react-router-dom';
import Account from './Pages/Account/Account';
import Homepage from './Pages/Homepage/Homepage';
import PersonalData from './components/AccountSettings/PersonalData/PersonalData';
import Layout from './components/Layout';
function App() {

  return (
    <>
    <Routes>
      <Route>
        <Route path='/' element={<Layout/>}/>
        <Route index element={<Homepage/>}/>
        <Route path = 'account' element={<Account/>}/>
        <Route path = '/account/personal-data' element={<PersonalData/>}/>
      </Route>
    </Routes>
  
    
    </>
  )
}

export default App;
