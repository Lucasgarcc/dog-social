import React from 'react';
import styles from './PhotoContent.module.css';
import { Link } from 'react-router-dom';
import PhotoComments from '../PhotoComments/PhotoComments';
import { UserContext } from '../../../../contexts/UserContext';
import PhotoDelete from '../PhotoDelete/PhotoDelete';
import Skeletion from '../../../Helpers/Skeleton/Skeletion';

const PhotoContent = ({data}) => {
   
    const { photo, comments } = data;
    const user = React.useContext(UserContext);

    return (

        <div  className={styles.photo}>

            <div className={styles.img}>
                <Skeletion alt={photo.title} src={photo.src} />
            </div>

            <div className={styles.details}>
                <div>
                    <p className={styles.author}>

                        {user.data && user.data.username == photo.author
                            ? (
                                <PhotoDelete id={photo.id} />
                            ) : (
                                <Link to={`/profile/${photo.author}`}>
                                    @{photo.author}
                                </Link>
                            )      
                        }

                        <span className={styles.views}>
                            {photo.acessos}
                        </span>
                    </p>
                    <h1 className='title'>
                        <Link to={`/foto/${photo.id}`}>
                            {photo.title}
                        </Link>
                    </h1>
                    <ul className={styles.attributes}>
                        <li>
                            {photo.peso} kg
                        </li>
                        <li>
                            {photo.idade >= 1 
                                ? photo.idade + ' anos' 
                                : photo.idade + ' ano'
                            }
                        </li>
                    </ul>

                </div>
            </div>

            <PhotoComments 
                id={photo.id} 
                comments={comments} 
            />
        </div>

    )
}

export default PhotoContent;
