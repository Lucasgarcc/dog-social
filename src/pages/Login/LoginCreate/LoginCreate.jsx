import React from 'react';
import styles from './LoginCreate.module.css';
import Input from '../../../components/ui/Input/Input'
import Button from '../../../components/ui/Button/Button'
import useForm from '../../../hooks/useForm/useForm';
import { UserContext } from '../../../contexts/UserContext';
import Error from '../../../components/Helpers/Error/Error';
import useFetch from '../../../hooks/useFetch/useFetch';
import { USER_POST } from '../../../api/endpoints/endpoints';

const LoginCreate = () => {

	/**
	 * @description  para armazenar os dados do formulário
	 */
	const fields = useForm({
		username: 'username',
		email: 'email',
		password: 'password'
	});

	/**
	 * @description contexto global com actions api
	 */
	const { userLogin} = React.useContext(UserContext);
	const {loading, data, error, request} = useFetch();

	/**
	 * 
	 * @description envia os dados cria usuério
	 * @param {*} e 
	 * @returns 
	 */
	const createUser = async (e) => {

		e.preventDefault();

		if (!fields.valideteAll()) return;

		const { url, options } = USER_POST(fields.values);

		request(url, options);

		if (data) {
			setTimeout(async () => {
				await userLogin(fields.values.email, fields.values.password);
			}, 0);
		}

	}

	return (
		<section className='animeLeft'>
			<h1 className='title'>Cadastre-se</h1>

			<form onSubmit={createUser}>
				<Input
					id={'username'}
					label={'Usuário'}
					name={'username'}
					type="text"
					placeholder={'Usuário'}
					{...fields.username}
				/>
				<Input
					id={'email'}
					label={'Email'}
					name={'email'}
					type="text"
					placeholder={'exemplo@email.com'}
					{...fields.email}
				/>
				<Input
					id={'password'}
					label={'Senha'}
					name={'password'}
					type="password"
					placeholder={'Digite a Senha'}
					{...fields.password}
				/>

				{loading ? (
					<Button
						label={'Carregando...'}
						disabled
					/>
				) : (
					<Button
						type={'submit'}
						label={'Cadastrar'}
						color={'--color-primary'}
						hoverColor={'--color-primary-hover'}
						focusColor={'-color-primary-focus'}
					/>
				)}

				{error &&
					<Error error={error} />
				}
			</form>

		</section>
	)

}

export default LoginCreate;
