import React from 'react'

const UserPost = () => {
    
    /*const [username, setUsername] = React.useState('');
    const [ email, setEmail ] = React.useState('');
    const [ password, setPassword ] = React.useState('');*/

  
    const [formData, setFormData] = React.useState({
        username: '',
        email: '',
        password: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
            setFormData({
            ...formData, // Mantém o que já estava lá
            [name]: value // Atualiza apenas o campo que mudou
        });
    };

    const handleSubmit = (e) => {

        e.preventDefault();

        const URL = 'https://dogsapi.origamid.dev/json/api/user';

        console.log({...formData});

        fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...formData }) 
        }).then(resp => { 
                console.log('Response of API: ', resp.json()); 
                return resp;
            })
            .catch(err => {
                console.error(err); 
                throw err; 
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
                name='email'
                type="text" 
                value={formData.email}
                placeholder='seu@email.com' 
                onChange={handleInputChange} 
            />
            <input 
                name='password'
                type="text" 
                value={formData.password} 
                placeholder='Senha'
                onChange={handleInputChange} 
            />

            <button type="submit" >
                Enviar            
            </button>
        </form>
    )

}

export default UserPost;
