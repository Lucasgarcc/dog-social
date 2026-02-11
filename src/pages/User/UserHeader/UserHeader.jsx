import React from 'react';
import UserHeaderNav from './UserHeaderNav/UserHeaderNav';
import styles from './UserHeader.module.css';
import { useLocation } from 'react-router-dom';

const UserHeader = () => {

    const [title, setTitle] = React.useState('');
    const location = useLocation();

    /**
     * @description Cria efeito de navegação de rota selecionando o título
     */
    React.useEffect(() => {

        // Mapeamento direto: prático e rápido
        const titles = {
            '/account/statistics': 'Estatísticas',
            '/account/posted': 'Postar Foto',
            '/account': 'Minha Conta',
        };

        setTitle(titles[ location.pathname ] || 'Minha Conta');

    }, [location]);

    return (

        <header className={styles.header}>
            <h1 className='title'>{title}</h1>
            <UserHeaderNav />
        </header>
    )

}

export default UserHeader;
