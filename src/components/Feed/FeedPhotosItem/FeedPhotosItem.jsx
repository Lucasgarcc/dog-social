import React from 'react';
import styles from './FeedPhotosItem.module.css';
import Skeletion from '../../Helpers/Skeleton/Skeletion';

const FeedPhotosItem = ({ photo, setModalPhoto}) => {

    const handleClick = ()  => {
       setModalPhoto(photo);
    }

    return (

        <li className={styles.photo} onClick={handleClick}>

            <Skeletion alt={photo.title} src={photo.src} />
            
            <span className={styles.view}>{photo.acessos}</span>
        </li>

    )
}

export default FeedPhotosItem;
