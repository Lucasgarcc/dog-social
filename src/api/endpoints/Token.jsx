import React from 'react'

const Token = (tokenValue) => {
    
    /*const [username, setUsername] = React.useState('');
    const [ email, setEmail ] = React.useState('');
    const [ password, setPassword ] = React.useState('');*/

    const [ formData, setFormData] = React.useState({
        username: '',
        password: ''
    });

    const [token, setToken] = React.useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
            setFormData({
            ...formData, // Mantém o que já estava lá
            [name]: value // Atualiza apenas o campo que mudou
        });
    };

    const handleSubmit = (e) => {

        e.preventDefault();

        const URL = 'https://dogsapi.origamid.dev/json/jwt-auth/v1/token';

        console.log({...formData});

        fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData) 
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
                console.error(err); 
        });
    };


    return (

        <form onSubmit={handleSubmit}>
            <input 
                name='username'
                type="text" 
                value={formData.username} 
                placeholder='Nome'
                onChange={handleInputChange} 
            />
            <input 
                name='password'
                type="text" 
                value={formData.password} 
                placeholder='Senha'
                onChange={handleInputChange} 
            />

           {token && (<p style={{ wordBreak: 'break-all'}}>Token: {token}</p>)}

            <button type="submit" >
                Enviar            
            </button>
        </form>
    )

}

export default Token;

/* Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIyMzAwIiwiaWF0IjoxNzY4MDcxNzkyLCJleHAiOjE3NjgwNzUzOTJ9.Z_MkGydEhQXwlev75Aqe_cy2LMWQNcWhuSmAOZ5oMEg*/