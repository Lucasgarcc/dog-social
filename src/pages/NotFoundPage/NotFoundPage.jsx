import React from 'react';
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {

    return (

        <section className={`container ${styles.error}`}>

            <h1 className='title'>Erro</h1>
            <div className={styles.errorContent}>
                
                <span className={styles.errorNumber}> 404</span>
                <p>Página não encontrada</p>
        
            </div>

        </section>

    )
}

export default NotFoundPage;
