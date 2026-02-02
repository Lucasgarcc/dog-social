import React, { use } from 'react'
import styles from './LoginForm.module.css';
import { Link } from 'react-router-dom';
import Input from '../../../components/ui/Input/Input.jsx';
import Button from '../../../components/ui/Button/Button.jsx';
import  useForm from '../../../hooks/useForm/useForm.jsx';

const LoginForm = () => {

    /**
     * @description  para armazenar os dados do formulário
     */
    const fields = useForm({
        username: 'email',
        password: 'password'
    });

    /**
     * @description Função para lidar com o envio do formulário
     * @param {e} 
     */
    const handleSubmit = (e) => {

        e.preventDefault();

        if (!fields.valideteAll()) return;
        
        const URL = 'https://dogsapi.origamid.dev/json/jwt-auth/v1/token';


       fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(fields.values)
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

                <Button 
                    type={'submit'} 
                    label={'Entrar'} 
                />

            </form>

            <Link to="/login/create"> Criar Conta</Link> 

        </section>
    )
}

export default LoginForm;
