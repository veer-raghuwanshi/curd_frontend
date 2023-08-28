import React from 'react'
import Register from './Register'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Login';
import Homepage from './Homepage';
import Aboutpage from './Aboutpage';
import EditProfile from './EditProfile';
import ManageUsers from './ManageUsers';

function Routing() {
  return (
    <div>
    <Router>
        <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/homepage" element={<Homepage/>} />
        <Route path="/aboutpage" element={<Aboutpage/>} />
        <Route path="/editprofile" element={<EditProfile/>} />
        <Route path="/manageusers" element={<ManageUsers/>} />
        </Routes>
    </Router>

    </div>
  )
}

export default Routing
