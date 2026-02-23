import React from 'react'
import './styles/App.css'
import { Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header/Header.jsx';
import Home from './pages/Home/Home.jsx';
import Footer from './components/Layout/Footer/Footer';
import Login from './pages/Login/Login.jsx';
import User from './pages/USer/User.jsx';
import ProtectedRoute from './components/Helpers/ProtectedRoute/ProtectedRoute.jsx';
import Photo from './components/ui/Photo/Photo.jsx';
import UserProfile from './pages/User/UserProfile/UserProfile.jsx';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx';

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
						path='login/*'
						element={<Login />}
					/>
					<Route
						path='account/*'
						element={
							<ProtectedRoute>
								<User />
							</ProtectedRoute>
						}
					/>
					<Route 
						path='photo/:id' 
						element={ 
							<Photo />
						}
					/>
					<Route
						path='profile/:user'
						element={
							<UserProfile />
						}
					/>
					<Route 
						path='*'
						element={
							<NotFoundPage />
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
