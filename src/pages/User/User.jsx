import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Feed from '../../components/Feed/Feed';

import UserPhotoPost from './UserPhotoPost/UserPhotoPost';
import UserStatistics from './UserStatistics/UserStatistics';
import UserHeader from './UserHeader/UserHeader';
import { UserContext } from '../../contexts/UserContext';


const User = () => {

	const { data } = React.useContext(UserContext);

	return (
		<section className='container'>

			{/* Header */}
			<UserHeader />

			<Routes>
				
				<Route 
					path="/"
					element={<Feed user={data.id} />} 
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
