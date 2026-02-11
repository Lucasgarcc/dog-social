import React from 'react'
import './styles/App.css'
import { Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header/Header.jsx';
import Home from './pages/Home/Home.jsx';
import Footer from './components/Layout/Footer/Footer';
import Login from './pages/Login/Login.jsx';
import User from './pages/USer/User.jsx';
import ProtectedRoute from './components/Helpers/ProtectedRoute/ProtectedRoute.jsx';

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
					<Route
						path='/account/*'
						element={
							<ProtectedRoute>
								<User />
							</ProtectedRoute>
						}
						
					/>
				</Routes>

				{/* Footer */}
				<Footer />
			</div>
		</>
	)
}

export default App; 
