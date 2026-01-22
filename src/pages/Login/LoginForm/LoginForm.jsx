import React from 'react'
import styles from './LoginForm.module.css';
import { Link } from 'react-router-dom';
import Input from '../../../components/ui/Input/Input.jsx';
import Button from '../../../components/ui/Button/Button.jsx';

const LoginForm = () => {

    /**
     * State para armazenar os dados do formulário
     */
    const [data, setData] = React.useState({
        username: '',
        password: ''
    });

    /**
     * State para armazenar o token recebido após o login
     */
    const [error, setError] = React.useState(null);



    /**
     * Função para lidar com o envio do formulário
     * @param {e} 
     */
    const handleSubmit = (e) => {

        e.preventDefault();

        const URL = 'https://dogsapi.origamid.dev/json/jwt-auth/v1/token';

        console.log({ ...data });

        fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(resp => {

                if (!resp.ok) throw new Error('Erro na autenticação');

                return resp.json();
            })
            .then(json => {
                console.log('Token: ', json.token);

                setToken(json.token);

                return tokenValue = json.token;
            })
            .catch(err => {

                setError(err.message);
                console.error(err);
            });
    };

    /**
     * Função para atualizar o state conforme o usuário digita
     * @param {e}
     */
    const handleChange = (e) => {

        e.preventDefault();

        const { name, value } = e.target;
        setData({
            ...data, // Mantém o que já estava lá
            [ name ]: value // Atualiza apenas o campo que mudou
        });
    }

    return (
        <section className={styles.loginForm}>
            
            <h1>Login</h1> 
            
            <form onSubmit={handleSubmit}>
                <Input 
                    name={'username'}
                    type={'text'} 
                    value={data.username} 
                    placeholder={'Usuário'} 
                    onChange={handleChange}
                />
                <Input
                    name={'password'}
                    type={'text'}
                    value={data.password}
                    placeholder={'Digite a Senha'}
                    onChange={handleChange}
                />

                <Button 
                    type={'submit'} 
                    label={'Entrar'} 
                />

            </form>

            <Link to="/login/create"> Criar Conta</Link> 

            {error && <p>{error}</p>}

        </section>
    )
}

export default LoginForm;
