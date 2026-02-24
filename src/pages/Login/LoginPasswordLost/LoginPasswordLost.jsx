import React from 'react';
import Input from '../../../components/ui/Input/Input.jsx';
import Button from '../../../components/ui/Button/Button.jsx';
import useForm from '../../../hooks/useForm/useForm.jsx';
import useFetch from '../../../hooks/useFetch/useFetch.jsx';
import Error from '../../../components/Helpers/Error/Error.jsx';
import { PASSWORD_LOST } from '../../../routes/endpoints/endpoints.js';
import SweelAlert from '../../../components/Helpers/SweelAlert/SweelAlert.jsx';
import Head from '../../../components/Helpers/Head/Head.jsx';

const LoginPasswordLost = () => {

    const field = useForm({
        login: 'login'
    });
    const {error, loading, request } = useFetch();
    const [successMessage, setSuccessMessage] = React.useState(null);

    const handlePasswordLost = async (e) =>{

        e.preventDefault();

        if(!field.validateAll()) return;

        const { url, options } = PASSWORD_LOST({
            login: field.login.value,
            url: window.location.href.replace('password-lost', 'resetar')
        });

        const {json} = await request(url, options);

        if  (json) {
            setSuccessMessage(json);
        }

    };

    return (

        <section>
            <Head
                title={'Recuperar Senha'} 
            />
            <h1 className='title'>Perdeu a senha?</h1>

            <form onSubmit={handlePasswordLost}>
                
                <Input 
                    id={'email'}
                    label={'Email / Usuário'}
                    name={'email'}
                    type="text" 
                    placeholder={'Digite seu email'} 
                    {...field.login}
                />

                {loading ? (
                    <Button
                        color='--color-primary'
                        hoverColor='--color-primary-hover'
                        focusColor='-color-primary-focus'
                        label='Enviando...'
                        disabled
                        type={'submit'}
                    /> 
                    ): (
                    <Button
                        color='--color-primary'
                        hoverColor='--color-primary-hover'
                        focusColor='-color-primary-focus'
                        label='Enviar Email'
                        type={'submit'}
                    />
                )}

            </form>
      
            {successMessage  && !loading && (
                <SweelAlert 
                    type='success'
                    title='Sucesso'
                    text= {successMessage}
                />
            )}
            <Error error={error} />
        </section>

    )
}

export default LoginPasswordLost;
