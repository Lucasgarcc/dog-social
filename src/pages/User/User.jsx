import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Feed from '../../components/Feed/Feed';

import UserPhotoPost from './UserPhotoPost/UserPhotoPost';
import UserStatistics from './UserStatistics/UserStatistics';
import UserHeader from './UserHeader/UserHeader';
import { UserContext } from '../../contexts/UserContext';
import NotFoundPage from '../NotFoundPage/NotFoundPage.jsx';
import Head from '../../components/Helpers/Head/Head.jsx';


const User = () => {

	const { data } = React.useContext(UserContext);

	return (

		<section className='container'>

			{/* Head navegador */}
			<Head
				title={'Minha Conta'} 
			/>

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
				<Route
					path='*'
					element={
						<NotFoundPage />
					}
				/>
		
			</Routes>

		</section>

	)
}

export default User;
