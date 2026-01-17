import React from 'react'


const PhotoPost = () => {
    
    /*const [username, setUsername] = React.useState('');
    const [ email, setEmail ] = React.useState('');
    const [ password, setPassword ] = React.useState('');*/

    const [ formData, setFormData] = React.useState({

        username: '',
        peso: '',
        age: '',
        image: ''

    });

    const [ token, setToken ] = React.useState('');


    const  data = (value) => {

        const form = new FormData();

        form.append('username', value.username);
        form.append('peso', value.peso);
        form.append('idade', value.idade);
        form.append('image', value.image);

        return form;
    }

    const dataForm = data(formData);

   
    const handleInputChange = (e) => {

        const { name, value } = e.target;

            setFormData({
            ...formData, // Mantém o que já estava lá
            [name]: value 
            // Atualiza apenas o campo que mudou
        });
    };

    const hangleImageChange = (e) => {

        const { name } = e.target;
        const file = e.target.files[0];

            setFormData({
            ...formData, // Mantém o que já estava lá
            [name]: file // Atualiza apenas o campo que mudou

        });
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        const URL = 'https://dogsapi.origamid.dev/json/api/photo';

        console.log({...formData});

        fetch(URL, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer' + token,
            },
            body: dataForm,
        })
        .then(resp => { 

                if (!resp.ok) throw new Error('Erro na autenticação');

                return resp.json();
        })
        .then(json => {
                console.log('Token: ', json.token);
                setToken(json.token);
        })
        .catch(err => {
                console.error(err); 
        });
    };


    return (

        <form onSubmit={handleSubmit}>
            <input 
                name='token'
                type="text" 
                value={token} 
                placeholder='Token'
                onChange={(e) => setToken(e.target.value)} 
            />
            <input
                name='username'
                type="text"
                value={formData.username}
                placeholder='nome'
                onChange={handleInputChange}
            />

            <input
                name='peso'
                type="text"
                value={formData.peso}
                placeholder='Peso'
                onChange={handleInputChange}
            />

            <input
                name='idade'
                type="text"
                value={formData.idade}
                placeholder='Idade'
                onChange={handleInputChange}
            />

            <input
                name='image'
                type="file"
                onChange={hangleImageChange}
            />

            <button type="submit" >
                Enviar            
            </button>
        </form>
    )

}

export default PhotoPost;

/* Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIyMzAwIiwiaWF0IjoxNzY4MDcxNzkyLCJleHAiOjE3NjgwNzUzOTJ9.Z_MkGydEhQXwlev75Aqe_cy2LMWQNcWhuSmAOZ5oMEg*/