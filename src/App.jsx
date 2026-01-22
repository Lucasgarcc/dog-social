import React from 'react'
import './styles/App.css'
import { Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header/Header.jsx';
import Home from './pages/Home/Home.jsx';
import Footer from './components/Layout/Footer/Footer';
import Login from './pages/Login/Login.jsx';

function App() {

  return (
      <>
        <div>
            {/* Header */}
            <Header />

            <Routes>
                <Route 
                  path='/' 
                  element={<Home />} 
                />
                <Route 
                  path='/login/*' 
                  element={<Login />}
                />
            </Routes>

            {/* Footer */}
            <Footer />
        </div>
      </>
  )
}

export default App; 
