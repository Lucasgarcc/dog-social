import React, { use } from 'react'
import styles from './LoginForm.module.css';
import { Link } from 'react-router-dom';
import Input from '../../../components/ui/Input/Input.jsx';
import Button from '../../../components/ui/Button/Button.jsx';
import styleBtn from '../../../components/ui/Button/Button.module.css';
import Error from '../../../components/ui/Error/Error.jsx';
import  useForm from '../../../hooks/useForm/useForm.jsx';
import  { UserContext }  from '../../../contexts/UserContext.jsx';

const LoginForm = () => {

    /**
     * @description  para armazenar os dados do formulário
     */
    const fields = useForm({
        username: 'email',
        password: 'password'
    });

    const { userLogin, error, loading } = React.useContext(UserContext);

    /**
     * @description Função para lidar com o envio do formulário
     * @param {e} 
     */
    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!fields.valideteAll()) return;
    
        userLogin(fields.values.username, fields.values.password);
        
    };

    return (
        <section className={`${styles.loginForm} animeLeft`} >
            
            <h1 className='title'>Login</h1> 
            
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

                {loading ?  (
                    <Button 
                        className={styles.btnSend}
                        label={'Carregando...'}
                        disabled
                    />
                ) : (
                    <Button 
                        className={styles.btnSend}
                        type={'submit'} 
                        label={'Entrar'} 
                    />
                )}

                {error && 
                    <Error error={error} />
                }

            </form>
            <Link
                to="/login/resetpassword"
                className={styles.resetpassword}
            >
                Esqueceu a Senha?
            </Link> 

            <div className={styles.register}>
                <h2 className={styles.subtitle}>Cadastre-se</h2>
                <p className={styles.text}>Ainda não possui conta? Cadastre-se no site.</p>
            </div>

            <Link
                to="/login/create" 
                className={styleBtn.button}
            >
             Criar Conta
            </Link> 
            
        </section>
    )
}

export default LoginForm;
