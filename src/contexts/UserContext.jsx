import React from 'react'

export const UserContext = React.createContext();

import { TOKEN_POST, USER_GET } from '../api/endpoints/endpoints.js';

const UserStorage = ({ children }) => {

    /**
     * @description  estados para armazenar os dados do usuário e o status do login
     */
    const [data, setData] = React.useState(null);
    const [login, setLogin] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    /**
     * 
     * @param {*} token 
     * @returns 
     */
    const getUser = async (token) => {

        const { url, options } = USER_GET(token);

        const resp = await fetch(url, options);
        const json = await resp.json();

        setData(json);
        setLogin(true);

    }

    /**
     * 
     * @param {*} username 
     * @param {*} password 
     */
    const userLogin = async (username, password) => {

        try {   

            const { url, options } = TOKEN_POST({username, password});

            const tokenRes = await fetch(url, options);
            const { token } = await tokenRes.json();

            if (!token) throw new Error('Token inválido');

            window.localStorage.setItem('token', token);
            getUser(token);
        }
        catch(err) {

            console.log(err);

        }
    
    }


    return (
        <UserContext.Provider value={{userLogin, data, login, loading, error}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserStorage;
