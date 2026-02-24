import React from 'react'
import styles from './Home.module.css';
import Feed from '../../components/Feed/Feed'
import Head from '../../components/Helpers/Head/Head';

const Home = () => {

	return (

		<section className={`${styles.home} container`}>
			<Head
				title={'Fotos'}
				description={'Home do site Dogs, com o feed de fotos.'}
			/>
			<Feed />

		</section>
	)
}

export default Home
