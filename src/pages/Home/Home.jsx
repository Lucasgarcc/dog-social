import React from 'react'
import styles from './Home.module.css';
import Feed from '../../components/Feed/Feed'

const Home = () => {

	return (

		<section className={`${styles.home} container`}>

			<Feed />

		</section>
	)
}

export default Home
