import React from 'react';
import styles from './NotFoundPage.module.css';
import Head from '../../components/Helpers/Head/Head';

const NotFoundPage = () => {

    return (

        <section className={`container ${styles.error}`}>

            <Head
                title={'Página Não Encontra'} 
            />

            <h1 className='title'>Erro</h1>
            <div className={styles.errorContent}>
                
                <span className={styles.errorNumber}> 404</span>
                <p>Página não encontrada</p>
        
            </div>

        </section>

    )
}

export default NotFoundPage;
