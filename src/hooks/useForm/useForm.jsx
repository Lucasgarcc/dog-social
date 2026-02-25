import React from 'react'

/**
 * @description Definição dos tipos de validação disponíveis
 */
const types = {
	username: {
		name: 'usuário',
		regex: /^[a-zA-Z][a-zA-Z0-9_]{2,15}$/,
		message: 'O usuário deve começar com uma letra, conter apenas letras, números ou "_" e ter entre 3 e 15 caracteres.'
	},
	email: {
		name: 'email',
		regex: /^[a-zA-Z][a-zA-Z0-9_]{2,15}$/,
		message: 'Preencha um email válido'
	},
	password: {
		name: 'senha',
		regex: /^[a-zA-Z][a-zA-Z0-9_]{2,15}$/,
		message: 'A senha deve ter no mínimo 8 caracteres, incluindo letras e números.'
	},
	name: {
		name: 'nome',
		regex: /^[A-Za-zÀ-ÖØ-öø-ÿ ]{2,}$/,
		message: 'Insira seu nome completo (apenas letras).'
	},
	weight: {
		name: 'peso',
		regex: /^\d{1,3}(?:[.,]\d{1,2})?$/,
		message: 'Insira um peso válido (ex: 75.5).'
	},
	age: {
		name: 'idade',
		regex: /^(?:[1-9][0-9]?|150)$/,
		message: 'Insira uma idade válida entre 1 e 150.'
	},
	comment: {
		name: 'comentário',
		regex: /^[\s\S]{2,}$/,
		message: 'O comentário deve ter mais de 3 caracteres.'
	},
	login: {
		name: 'email ou usuário',
		regex: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$|^[a-zA-Z][a-zA-Z0-9_]{2,15}$/,
		message: 'Preencha um email ou usuário válido'
	}
}

const useForm = (schema) => {

	/**
	 * @description para armazenar os valores dos campos do formulário
	 */
	const [ values, setValues ] = React.useState(

		Object.keys(schema).reduce((acc, key) => {
			acc[ key ] = '';
			return acc;
		}, {})

	);
	const [ error, setError ] = React.useState({});

	/**
	 * @description Função para atualizar o state conforme o usuário digita
	 * @param {target}
	*/
	const onChange = ({ target }) => {

		const { name, value } = target;

		setValues((prev) => ({
			...prev,
			[ name ]: value,
		}));
	}

	/**
	 *  @description Função para validar o campo conforme o tipo definido
	 * @param {value}
	 */
	const validate = (name, value) => {

		const type = schema[ name ];

		if (type === false) return true;

		if (value.length === 0) {

			setError((e) => ({ ...e, [ name ]: `Preencha o campo ${types[ type ] ? types[ type ].name : ''}` }));
			return false;
		}
		else if (types[ type ] &&
			!types[ type ].regex.test(value)) {

			setError((e) => ({ ...e, [ name ]: types[ type ].message }));
			return false;
		}
		else {
			setError((e) => ({ ...e, [ name ]: null }));
			return true;
		}

	}

	/**
	 * @description Função para validar todos os campos
	 * @returns 
	 */
	const validateAll = () => {

		return Object.keys(values).every((name) => {
			return validate(name, values[ name ]);
		})

	}

	/**
	 * @description Mapeia os campos para facilitar o uso nos componentes
	 * @return {acc}
	 *  
	 */
	const fields = Object.keys(values).reduce((acc, name) => {

		acc[ name ] = {
			name,
			value: values[ name ],
			onChange,
			validate: () => validate(name, values[ name ]),
			onBlur: () => validate(name, values[ name ]),
			error: error[ name ]
		}
		return acc;
	}, {});

	return {
		...fields,
		values,
		validateAll,
	}
}

export default useForm;
