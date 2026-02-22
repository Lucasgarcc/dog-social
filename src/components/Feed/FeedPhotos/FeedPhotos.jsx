import React from 'react';
import styles from './FeedPhotos.module.css';
import FeedPhotosItem from '../FeedPhotosItem/FeedPhotosItem';
import useFetch from '../../.././hooks/useFetch/useFetch';
import { PHOTOS_GET } from '../../../routes/endpoints/endpoints';
import Loading from '../../Helpers/Loading/Loading';

const FeedPhotos = ({ user , page, setModalPhoto, setInfinite}) => {

    const {data, loading, error, request} = useFetch();

    React.useEffect(() => {

        const fetchPhotos = async ()  => {

            const total = 12;
            const { url, options } = PHOTOS_GET({
                page,
                total,
                user
            });

            const { response, json } = await request(url, options);

            if (response && response.resp.ok && json.length < total) {

                setInfinite(false);

            }
        };

        fetchPhotos();

    },[request, user, page, setInfinite]);

    if (error)  return <Error error={error} />;
    if (loading) return <Loading />;

    if (data)
        return (
            <ul className={`${styles.feed} animeLeft`}> 
                {data.map((photo) => (
                    <FeedPhotosItem 
                        key={photo.id} 
                        photo={photo}
                        setModalPhoto={setModalPhoto} 
                    />
                ))}
            </ul>
        )
    else return null;
};

export default FeedPhotos
