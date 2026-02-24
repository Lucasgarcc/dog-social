import React from 'react'
import styles from './UserPhotoPost.module.css'
import Input from '../../../components/ui/Input/Input'
import Button from '../../../components/ui/Button/Button';
import useForm from '../../../hooks/useForm/useForm';
import useFetch from '../../../hooks/useFetch/useFetch';
import { PHOTO_POST } from '../../../routes/endpoints/endpoints';
import Error from '../../../components/Helpers/Error/Error';
import {UserContext} from '../../../contexts/UserContext'
import Head from '../../../components/Helpers/Head/Head';
const UserPhotoPost = () => {
    
    /**
     * @description  para armazenar os dados do formulário
     */
    const fields = useForm({
        nome: 'name',
        peso: 'weight',
        idade: 'age'
    })

    /**
     * @description  variaveis de estado
     */
    const [img, setImg] = React.useState({});
    const {request, data, error, loading } = useFetch();
    const { navigate } = React.useContext(UserContext);

    /**
     * @description Efeito de redirecionamento após envio conclúido
     */
    React.useEffect(() => {
        if (data) navigate('/account');
    }, [data, navigate])


    /**
     * @description Manipula o envio do formulário e realiza o upload da foto.
     * @param {*} e
     */
    const sendPhoto = (e) => {

        e.preventDefault();

        if (!fields.validateAll()) return;
        if (!img?.raw) return;

        const formData = new FormData();

        formData.append('img', img.raw);
        formData.append('nome', fields.nome.value);
        formData.append('peso', fields.peso.value);
        formData.append('idade', fields.idade.value);

        const token = window.localStorage.getItem('token');
        const { url, options } = PHOTO_POST(formData, token);

        request(url, options);
    };
      

    const handleImgChange = ({target}) => {
        
        setImg({
            preview: URL.createObjectURL(target.files[0]),
            raw: target.files[0],
        });

        console.log(URL.createObjectURL(target.files[ 0 ]))
    };

    return (
        <section className={`${styles.photoPost} animeLeft`}>

            <Head
                title={'Postar Foto'}
            />
            <form onSubmit={sendPhoto}>

                <Input 
                    label="Nome"
                    type="text"
                    name={'nome'}
                    {...fields.nome}
                />
                
                <Input 
                    label="Peso"
                    type="text"
                    name={'peso'}
                    {...fields.peso}
                />

                <Input 
                    label="Idade"
                    type="text"
                    name={'idade'}
                    {...fields.idade}
                />


                <div className={styles.fileWrapper}>
                    <input
                        id="img"
                        type="file"
                        name="img"
                        onChange={handleImgChange}
                        className={styles.fileInput}
                    />

                    <label htmlFor="img" className={styles.fileLabel}>
                        {img?.raw ? 'Imagem selecionada ✓' : 'Selecionar imagem'}
                    </label>
                </div>

                {loading ? (
                        <Button
                            color='--color-primary'
                            hoverColor='--color-primary-hover'
                            focusColor='-color-primary-focus'
                            type={'submit'}
                            disabled
                            label={'Enviando'}
                        />
                    ):
                    (

                    <Button
                        color='--color-primary'
                        hoverColor='--color-primary-hover'
                        focusColor='-color-primary-focus'
                        type={'submit'}
                        label={'Enviar'}
                    />

                )}

                {error &&
                    <Error error={error} />
                }

            </form>

            <div>
                {img.preview && (
                    <div 
                        className={styles.preview}
                        style={{backgroundImage: `url('${img.preview}')`}}>
                    </div>
                )}
            </div>

        </section>
    )
}

export default UserPhotoPost;
