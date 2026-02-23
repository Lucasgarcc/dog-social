import React from 'react';
import styles from './Photo.module.css';
import { useParams } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch/useFetch';
import { PHOTO } from '../../../routes/endpoints/endpoints';
import Loading from '../../Helpers/Loading/Loading';
import Error from '../../Helpers/Error/Error';
import PhotoContent from './PhotoContent/PhotoContent';

const Photo = () => {

    const { id } = useParams();
    const { data, loading, error, request } = useFetch();

    React.useEffect(() => {

        const { url, options } = PHOTO(id); 
        
        request(url, options);
    
    }, [request, id])

    if (error)  return  <Error error={error} />;

    if (loading) return <Loading />;

    if (data) {

        return (

            <div className={`${styles.photo} animeLeft container` }>
                <PhotoContent data={data} single={true} />
            </div>

        )

    }
    else return null;

}

export default Photo;
