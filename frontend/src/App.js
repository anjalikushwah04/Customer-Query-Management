import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'
import Adlogin from './admindata/Adlogin'
import Addashboard from './admindata/Addashboard';
import ViewAllUser from './admindata/ViewAllUser'
import Login from './userdata/Login'
import Registration from './userdata/Registration';
import Dashboard from './userdata/Dashboard';
import Edituserdetails from './userdata/Edituserdetails'
import Addquery from './userdata/Addquery'
import Pendingquery from './userdata/Pendingquery';
import Processingquery from './userdata/Processingquery';
import Completedquery from './userdata/Completedquery';
import Viewpendingquery from './userdata/Viewpendingwuery';
import Viewcompletedquery from './userdata/Viewcompletedquery';
import Viewprocessingquery from './userdata/Viewprocessingquery';
import Editpendingquery from './userdata/Editpendingquery';
import AllPendingQuery from './admindata/AllPendingQuery';
import AllProcessingQuery from './admindata/AllProcessingQuery';
import AllCompletedQuery from './admindata/AllCompletedQuery';
import ViewAllPendingQuery from './admindata/ViewAllPendingQuery'
import ViewAllProcessingQuery from './admindata/ViewAllProcessingQuery'
import ViewAllCompletedQuery from './admindata/ViewAllCompletedQuery'
import AdminDash from './admindata/AdminDash';
import Userforgot from './userdata/Userforgot';
import Resetpassword from './userdata/Resetpassword';
import UserDash from './userdata/UserDash';
import EditAdDetails from './admindata/EditAdDetails'

function App() {
  return (
    <>
    <div className='container-fluid'>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/adlogin' element={<Adlogin/>}/>
    <Route path='/adminDashboard/:id' element={<Addashboard/>}/> 
    <Route path='/admin/dashboard' element={<AdminDash/>}/> 
    <Route path='/viewalluser' element={<ViewAllUser/>}/>
    <Route path='/allpendingquery' element={<AllPendingQuery/>}/>
    <Route path='/viewallpendingquery/:id' element={<ViewAllPendingQuery/>}/>
    <Route path='/allprocessingquery' element={<AllProcessingQuery/>}/> 
    <Route path='/viewallprocessingquery/:id' element={<ViewAllProcessingQuery/>}/>
    <Route path='/allcompletedquery' element={<AllCompletedQuery/>}/>
    <Route path='/viewallcompletedquery/:id' element={<ViewAllCompletedQuery/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/registration' element={<Registration/>}/>
    <Route path='/userDashboard/:id' element={<Dashboard/>}/>
    <Route path='/user/dashboard' element={<UserDash/>}/> 
    <Route path='/edituserdetails/:id' element={<Edituserdetails/>}/>
    <Route path='/editadmindetails/:id' element={<EditAdDetails/>}/>
    <Route path='/addquery' element={<Addquery/>}/>
    <Route path='/pendingquery' element={<Pendingquery/>}/>
    <Route path='/viewpendingquery/:id' element={<Viewpendingquery/>}/>
    <Route path='/processingquery' element={<Processingquery/>}/>
    <Route path='/viewprocessingquery/:id' element={<Viewprocessingquery/>}/>
    <Route path='/editpendingquery/:id' element={<Editpendingquery/>}/>
    <Route path='/completedquery' element={<Completedquery/>}/>
    <Route path='/viewcompletedquery/:id' element={<Viewcompletedquery/>}/>
    <Route path='/userforgot' element={<Userforgot/>}/>
    <Route path='/resetpassword/:id' element={<Resetpassword/>}/>
    {/* <Route path='/admindashboard' element={<AdminDashboard/>}/> */}

    </Routes>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
