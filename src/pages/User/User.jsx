import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Feed from '../../components/Feed/Feed';

import UserPhotoPost from './UserPhotoPost/UserPhotoPost';
import UserStatistics from './UserStatistics/UserStatistics';
import UserHeader from './UserHeader/UserHeader';


const User = () => {
	return (
		<section className='container'>

			{/* Header */}
			<UserHeader />

			<Routes>
				
				<Route 
					path="/"
					element={<Feed />} 
				/>
				<Route
					path="statistics"
					element={<UserStatistics />}
				/>
				<Route
					path="posted"
					element={<UserPhotoPost />}
				/>

		
			</Routes>

		</section>
	)
}

export default User;
