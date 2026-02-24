import React from 'react';

import Input from '../../../components/ui/Input/Input';
import Button from '../../../components/ui/Button/Button';
import useFetch from '../../../hooks/useFetch/useFetch';
import useForm from '../../../hooks/useForm/useForm';
import { PASSWORD_RESET } from '../../../routes/endpoints/endpoints';
import Error from '../../../components/Helpers/Error/Error';
import { UserContext } from '../../../contexts/UserContext';
import Head from '../../../components/Helpers/Head/Head';

const LoginPasswordReset = () => {

	const [login, setLogin] = React.useState('');
	const [key, setKey] = React.useState('');

	const field = useForm({
		password:'password',
	})
	const { loading, error, request } = useFetch();
	const { navigate } = React.useContext(UserContext);


	React.useEffect(()=> {

		const params = new URLSearchParams(window.location.search);
		const key = params.get('key');
		const login = params.get('login');

		if (key) setKey(key);
		if (login) setLogin(login);
		
	},[]);


	const handlePasswordReset = async (e) => {

		e.preventDefault();
	
		if (!field.validateAll()) return;

		const { url, options } = PASSWORD_RESET({
			login,
			key,
			password: field.values.password
		})

		const { response } = await request(url, options);

		if (response?.resp.ok) navigate('login')

	};

	return (

		<div>
			<Head
				title={'Redefinir Senha'} 
			/>
			<h1 className='title'>Redefinir Senha</h1>

			<form onSubmit={handlePasswordReset}>

				<Input
					id={'password'}
					label={'Nova Senha'}
					name={'password'}
					type="password"
					placeholder={'Digite nova senha'}
					{...field.password}
				/>

				{loading ? (
					<Button
						color='--color-primary'
						hoverColor='--color-primary-hover'
						focusColor='-color-primary-focus'
						label='Redefinindo...'
						disabled
						type={'submit'}
					/>
				) : (
					<Button
						color='--color-primary'
						hoverColor='--color-primary-hover'
						focusColor='-color-primary-focus'
						label='Redefinir'
						type={'submit'}
					/>
				)}

			</form>
			<Error error={error} />
		</div>

	)

}

export default LoginPasswordReset
