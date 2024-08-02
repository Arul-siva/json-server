import React from "react";
// import Popup from "./component/Popup";
// import Demo from "./component/Demo";
import { Route,Routes, useNavigate } from "react-router-dom";
import 'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import Popup from "./component/Popup";
import { Mail } from "./component/Mail";
import Abiget from "./component/Apiget";
import FetchDataComponent from "./component/FetchDataComponent";
import Popup from "./component/Popup";
import Users from "./component/Users";
import Advice from "./component/Advice";
import Wether from "./component/Wether";
import './App.css'
const App = () => {
  const navigate = useNavigate();
  return(
    <>
    <nav className="navbar">
      <ul className="d-flex gap-5">
        <li onClick={() => navigate("/")}>User List</li>
        <li onClick={() => navigate("/fetch")}>Add User</li>
        <li onClick={() => navigate("/fetch")}>Setting</li>
      </ul>
    </nav>
   <Routes>                                                                                                                                                                                                 `                                                                         ```````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
    <Route path="/mail" element={<Mail/>} /> 
    <Route path="/" element={<Abiget/>}/>  
    <Route path="/wether" element={<Wether/>}/>  
    <Route path="/users" element={<Users/>} />
    <Route path="/advice" element={<Advice/>} />
    <Route path="/popup" element={<Popup/>}/>  
    <Route path="/fetch" element={<FetchDataComponent/>}/>  
   </Routes>
    </>
  )
}

export default App;