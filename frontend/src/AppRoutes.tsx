import {Routes,Route,Navigate} from 'react-router-dom'
import Layout from './layouts/layout';
import HomePage from './pages/HomePage';
import AuthCallbackPage from './pages/AuthCallbackPage';

const AppRoutes = () => {
  return (
    <div>
      <Routes>
         <Route path="/" element={<Layout><HomePage/></Layout>}/>
         <Route path="/auth-callback" element={<AuthCallbackPage/>}/>
         <Route path="/user-profile" element={<span>USER PROFILE PAGE</span>}/>
         <Route path="*" element={<Navigate to="/"/>}/>
         
      </Routes>
    </div>
  )
}

export default AppRoutes;
