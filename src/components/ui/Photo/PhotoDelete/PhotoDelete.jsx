import React from 'react';
import styles from './PhotoDelete.module.css';
import { PHOTO_DELETE } from '../../../../routes/endpoints/endpoints';
import useFetch from '../../../../hooks/useFetch/useFetch';
import Alert from '../../../Helpers/Alert/Alert';

const PhotoDelete = ({ id }) => {

    const { loading, request } = useFetch();
    const [ showAlert, setShowAlert ] = React.useState(false);

    const confirmDelete = async (e) => {

        e.preventDefault();

        if (typeof window === 'undefined') return;

        const token = window.localStorage.getItem('token');
        const { url, options } = PHOTO_DELETE(id, token);

        const response = await request(url, options);

        if (response?.resp?.ok) {
            window.location.reload();
        }
    };

    return (

        <div className={styles.delete}>
    
            <button
                className={styles.button}
                onClick={() => setShowAlert(true)}
            >
                {loading ? 'Deletando...' : 'Deletar'}
            </button>

            {showAlert && (
                <Alert
                    message="Tem certeza que deseja deletar esta foto?"
                    onConfirm={confirmDelete}
                    onClose={() => setShowAlert(false)}
                />
            )}
    
        </div>

    );
};

export default PhotoDelete;
