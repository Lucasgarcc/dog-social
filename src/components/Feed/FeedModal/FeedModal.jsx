import React from 'react';
import styles from './FeedModal.module.css';
import useFetch from '../../../hooks/useFetch/useFetch';
import { PHOTO_GET } from '../../../routes/endpoints/endpoints';
import Error from '../../Helpers/Error/Error';
import Loading from '../../Helpers/Loading/Loading';
import PhotoContent from '../../ui/Photo/PhotoContent/PhotoContent';

const FeedModal = ({ photo, setModalPhoto}) => {
    
    const { data, loading, error, request } = useFetch();

    React.useEffect(() =>{

        const { url, options } = PHOTO_GET(photo.id);
        request(url, options);
        
    },[photo, request]);

    const handleOutsideClick = (e) => {

        if (e.target === e.currentTarget) {
            setModalPhoto(null);
        }
    }

    return (
    
        <div className={styles.modal} onClick={handleOutsideClick}>

            {error && 
                <Error error={error} />
            }

            {loading &&
                <Loading />
            }

            {data &&  
                <PhotoContent data={data} />
            }
        </div>
    
    )
}

export default FeedModal
