import React, { use } from 'react'
import styles from './LoginForm.module.css';
import { Link } from 'react-router-dom';
import Input from '../../../components/ui/Input/Input.jsx';
import Button from '../../../components/ui/Button/Button.jsx';
import  useForm from '../../../hooks/useForm/useForm.jsx';
import { TOKEN_POST, USER_GET } from '../../../api/endpoints/endpoints.js';

const LoginForm = () => {

    /**
     * @description  para armazenar os dados do formulário
     */
    const fields = useForm({
        username: 'email',
        password: 'password'
    });

    /**
     * @description  para armazenar mensagens de erro do login
     */
    const [ error, setError ] = React.useState(null);

    /**
     * 
     * @param {*} token 
     * @returns 
     */
    const getUser = async (token) => {

        const { url, options } = USER_GET(token);

        const resp = await fetch(url, options);
        const json = resp.json();
        return json;
    }

    /**
     * @description Verifica se já existe um token no localStorage ao montar o componente
     */
    React.useEffect(() => {
        const token = window.localStorage.getItem('token');

        if (token) {
            getUser(token);
        }

    }, []);

    /**
     * @description Função para lidar com o envio do formulário
     * @param {e} 
     */
    const handleSubmit = async (e) => {

        e.preventDefault();

        if (fields.valideteAll()) return;
    
        try {
            const { url, options } = TOKEN_POST(fields.values);
            
            const resp = fetch(url, options).then(r => r.json());
            const json = await resp;

            window.localStorage.setItem('token', json.token);

            if (!resp.ok) {
                throw new Error(json.message);
            }


            return json;
        }
        catch (err) {
            setError(err.message.replace(/<[^>]*>/g, '')   // remove HTML
                        .replace(/^Erro:\s*/i, '') // remove "Erro:"
                        .trim());
        }

    };

    return (
        <section className={styles.loginForm}>
            
            <h1>Login</h1> 
            
            <form onSubmit={handleSubmit}>
                <Input 
                    id={'username'}
                    label={'Usuário'}
                    name={'username'}
                    type="text" 
                    placeholder={'Usuário'} 
                    {...fields.username}
                />
                <Input
                    id={'password'}
                    label={'Senha'}
                    name={'password'}
                    type="password"
                    placeholder={'Digite a Senha'}
                    {...fields.password}
                />

                {error  && <p className='error' >{error}</p>}

                <Button 
                    className={styles.btnSend}
                    type={'submit'} 
                    label={'Entrar'} 
                />

            </form>
            
            <Link
                to="/login/create" 
                className={styles.create}
            >
             Criar Conta
            </Link> 
            
        </section>
    )
}

export default LoginForm;
