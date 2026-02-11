import React from 'react'
import styles from './UserHeaderNav.module.css';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../../../contexts/UserContext';
import MyPhotos from '../../../../assets/img/feed.svg?react';
import Statistics from '../../../../assets/img/estatisticas.svg?react';
import Add from '../../../../assets/img/adicionar.svg?react';
import Exit from '../../../../assets/img/sair.svg?react';

const UserHeaderNav = () => {

    /**
     * @description estado de modo mobaile
     */
    const [mobile, setMobile] = React.useState(null);

    /**
     * @description para acessar os dados do contexto global
     */
    const { userLogout, navigate } = React.useContext(UserContext);

    /**
     * @description Função de sair
     */
    const logout = () => {
       userLogout();
       navigate('/login');
    }

    return ( 
        <nav className={styles.nav}>

            <NavLink  
                to="/account"
                end >
            <MyPhotos />
            {mobile && 'Minhas Fotos'}  
            </NavLink>

            <NavLink 
                to="/account/statistics">
                <Statistics />
                {mobile && 'Estatísticas'}
            </NavLink>

            <NavLink 
                to="/account/posted">
                <Add />
                {mobile && 'modAdicionar Foto'}
            </NavLink>
        
            <button
                onClick={logout}
            >
                <Exit/> 
                {mobile && 'sair'}
            </button>
        
        </nav>
    )
};

export default UserHeaderNav;
