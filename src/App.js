import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';


import SingIn from './component/sing-in/SingIn';
import SingUp from './component/sing-up/SingUp';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/loginRegister-react-css/SingIn" element={<SingIn />} />
        <Route path="loginRegister-react-css/SingUp" element={<SingUp />} />
        <Route path="/*" element={<Navigate to="/loginRegister-react-css/SingIn"/>} />
      </Routes>
    </div>
  );
}

export default App;
