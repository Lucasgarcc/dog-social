import React from 'react'
import '../styles/App.css'
import { Routes, Route } from 'react-router-dom';
import Header from '../components/Header/Header.jsx';
import Home from '../components/Home/Home.jsx';
import Footer from '../components/Footer/Footer';
import Login from '../components/Login/Login.jsx';

function App() {

  return (
      <>
        <div>
            {/* Header */}
            <Header />

            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
            </Routes>

            {/* Footer */}
            <Footer />
        </div>
      </>
  )
}

export default App; 
