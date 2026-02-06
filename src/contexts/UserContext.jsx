import React from 'react'
import { TOKEN_POST, TOKEN_VALIDATION_POST, USER_GET } from '../api/endpoints/endpoints.js';
import {  useNavigate } from 'react-router-dom';

export const UserContext = React.createContext();

const UserStorage = ({ children }) => {

    /**
     * @description  estados para armazenar os dados do usuário e o status do login
     */
    const [data, setData] = React.useState(null);
    const [login, setLogin] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const navigate = useNavigate();

    /**
     * @description Função para deslogar o usuário
     */
    const userLogout = React.useCallback(async () => {

        setData(null);
        setError(null);
        setLoading(false);
        setLogin(false);
        window.localStorage.removeItem('token');

        //
        navigate('/login');

    }, [ navigate ]);

    /**
     * @description Efeito para verificar se o usuário 
     já está logado ao carregar o componente
     */
    React.useEffect(() => {
        
        const autoLogin = async () => {

            const token = window.localStorage.getItem('token');

            if (token) {
                
                try {
                    setError(null);
                    setLoading(true);

                    const { url, options } = TOKEN_VALIDATION_POST(token);
                    const resp = await fetch(url, options);

                    if (!resp.ok) throw new Error('Token inválido');

                    await getUser(token);

                    // Redireciona para a página de conta após o login automático
                    navigate('/account');

                }
                catch(err) {

                    userLogout();
                }
                finally {
                    setLoading(false);
                }
            }
        } 

        autoLogin();
    },[userLogout]);

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

            setError(null);
            setLoading(true);

            const { url, options } = TOKEN_POST({username, password});
            const tokenRes = await fetch(url, options);

            const errorData = await tokenRes.json();
           if (!tokenRes.ok) throw new Error(errorData.message || 'Erro ao realizar o login');

            const { token } = await tokenRes.json();
            window.localStorage.setItem('token', token);

            await getUser(token);
        }
        catch (err) {

            setError(err.message.replace(/<[^>]*>/g, '')   // remove HTML
                .replace(/^Erro:\s*/i, '') // remove "Erro:"
                .trim());  
             
            setLoading(false);
        }
        finally {
            setLoading(false);
        }
   
    }

    return (
        <UserContext.Provider value={{userLogin, userLogout , data, error, loading, login}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserStorage;
