import React from 'react'
import styles from './FeedPhotos.module.css'
import FeedPhotosItem from '../FeedPhotosItem/FeedPhotosItem'
import useFetch from '../../.././hooks/useFetch/useFetch'
import { PHOTOS_GET } from '../../../api/endpoints/endpoints';
import Loading from '../../Helpers/Loading/Loading';

const FeedPhotos = () => {

    const {data, loading, error, request} = useFetch();

    React.useEffect(() => {

        const fetchPhotos = async ()  => {

            const { url, options } = PHOTOS_GET({
                page: 1,
                total: 6,
                user: 0
            });

            await request(url, options);
        };

        fetchPhotos();

    },[request]);

    if (error)  return <Error error={error} />;
    if (loading) return <Loading />;

    if (data)
        return (
            <ul className={`${styles.feed} animeLeft`}> 
                {data.map((photo) => (
                     <FeedPhotosItem key={photo.id} photo={photo} />
                ))}
            </ul>
        )
    else return null;
};

export default FeedPhotos
