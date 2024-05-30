import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Signup from './components/Signup';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/Login';
import Edit_Profile from './components/Edit_Profile';
import Search from './components/search';


const HeaderWrapper = () => {
  const location = useLocation();
  const isEditProfilePage = location.pathname === '/edit';
  return <Header isEditProfilePage={isEditProfilePage} />;
};

export default function App() {
  return (
    <Router>
      <ToastContainer />
      <HeaderWrapper />
      <Routes>
        <Route path="/" element={<><Home /><Footer /></>} />
        <Route path="/signup" element={<><Signup /><Footer /></>} />
        <Route path="/login" element={<><Login /><Footer /></>} />
        <Route path="/edit" element={<><Edit_Profile /><Footer /></>} />
        <Route path="/search" element={<><Search/><Footer /></>} />
      </Routes>
    </Router>
  );
}
