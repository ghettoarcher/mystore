import {Routes,Route} from 'react-router-dom';
import Account from './Pages/Account/Account';
import Homepage from './Pages/Homepage/Homepage';

function App() {

  return (
    <>
    <Routes>

      <Route path='/' element={<Homepage/>}/>
      <Route path = '/account' element={<Account/>}/>

    </Routes>
  
    
    </>
  )
}

export default App;
