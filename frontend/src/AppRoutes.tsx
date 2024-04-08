import {Routes,Route,Navigate} from 'react-router-dom'

const AppRoutes = () => {
  return (
    <div>
      <Routes>
         <Route path="/" element={<span>HOME PAGE</span>}/>
         <Route path="/user-profile" element={<span>USER PROFILE PAGE</span>}/>
         <Route path="*" element={<Navigate to="/"/>}/>
         
      </Routes>
    </div>
  )
}

export default AppRoutes;
