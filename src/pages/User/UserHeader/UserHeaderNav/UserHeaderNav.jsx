import React from 'react'
import styles from './UserHeaderNav.module.css';
import { NavLink, useLocation } from 'react-router-dom';
import { UserContext } from '../../../../contexts/UserContext';
import MyPhotos from '../../../../assets/img/feed.svg?react';
import Statistics from '../../../../assets/img/estatisticas.svg?react';
import Add from '../../../../assets/img/adicionar.svg?react';
import Exit from '../../../../assets/img/sair.svg?react';
import useMedia from '../../../../hooks/useMedia/useMedia';


const UserHeaderNav = () => {

    /**
     * @description estado de modo mobaile / acessar os dados do contexto global
     */
    const { userLogout, navigate } = React.useContext(UserContext);
    const mobile = useMedia('(max-width: 40rem)');
    const [mobileMenu, setMobileMenu] = React.useState(false);

    const { pathname } = useLocation();

    React.useEffect(() => {
        setMobileMenu(false);
    },[pathname])

    /**
     * @description Função de sair
     */
    const logout = () => {
       userLogout();
       navigate('/login');
    }

    return ( 
        <>
            {mobile && ( 
                <button 
                    aria-label='Menu' 
                    className={`
                    ${styles.mobileButton} 
                    ${
                        mobileMenu 
                        ? styles.mobileBtnActive 
                        : ''
                     }`}
                    onClick={() => setMobileMenu(!mobileMenu)}
                />
            )}                         

            <nav className={`
                    ${ mobile ? styles.navMobile :  styles.nav} 
                    ${mobileMenu && styles.navMobileActive}
                `}
            >

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
                    {mobile && 'Adicionar Foto'}
                </NavLink>

                <button
                    onClick={logout}
                >
                    <Exit />
                    {mobile && 'sair'}
                </button>

            </nav>
        </>
       
    )
};

export default UserHeaderNav;
