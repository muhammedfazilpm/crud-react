import './App.css';
import Userhome from './Userhome';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Loginuser from './Loginuser';
import Adminhome from './Adminhome';
import Adminlogin from './Adminlogin';
import Clienthome from './Clienthome';
import Clientlogin from './Clientlogin';
import Adminprivatroute from './component/Adminprivatroute';
import Adminprotectroute from './component/Adminprotectroute';
import Clientprivatroute from './component/Clientprivatroute';
import Clientpublicroute from './component/Clientpublicroute';
import Userprivateroute from './component/Userprivateroute';

import Userpublicroute from './component/Userpublicroute';

function App() {
  return (
    <div className='App'>
    <BrowserRouter>
<Routes>
<Route path='/userhome' element={<Userprivateroute><Userhome/></Userprivateroute>}/>
<Route path='/userlogin' element={<Userpublicroute><Loginuser/></Userpublicroute>}/>
<Route path='/adminlogin' element={<Adminprivatroute><Adminlogin/></Adminprivatroute>}/>
<Route path='/adminhome' element={<Adminprotectroute><Adminhome/></Adminprotectroute>}/>
<Route path='/clienthome' element={<Clientprivatroute><Clienthome/></Clientprivatroute>}/>
<Route path='/clientlogin' element={<Clientpublicroute><Clientlogin/></Clientpublicroute>}/>





</Routes>


    </BrowserRouter>
    </div>
  );
}

export default App;
