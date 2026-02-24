import React from 'react';
import styles from'./UserProfile.module.css';
import { useParams } from 'react-router-dom';
import Feed from '../../../components/Feed/Feed.jsx';
import Head from '../../../components/Helpers/Head/Head.jsx';

const UserProfile = () => {

    const { user } = useParams();

    return (

        <section className={` container ${styles.profile}`}>
            <Head
                title={user} 
            />
            <h3 className={styles.subtitle}>Perfil</h3>

            <h1 className={` title ${styles.title}`}> {user} </h1>

            <Feed user={user} />

        </section>

    )
}

export default UserProfile;
