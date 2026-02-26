import React from 'react';
import styles from './Feed.module.css';
import FeedModal from './FeedModal/FeedModal';
import FeedPhotos from './FeedPhotos/FeedPhotos';
import { FeedProps } from '../../types/feed.types';

const Feed = ({ user }) => {

    const [modalPhoto, setModalPhoto] = React.useState(null);
    const [pages, setPages] = React.useState([1]);
    const [infinite, setInfinite] = React.useState(true);
    const [hasPhotos, setHasPhotos] = React.useState(true);

    /**
     * @description Infinite Scroll
     */
    React.useEffect(() => {
        
        let wait = false;

        const infiniteScrolling = () => {

            if(infinite) {

                const scroll = window.screenY;
                const height = document.body.offsetHeight - window.innerHeight;

                if (scroll > height * 0.75 && !wait) {

                    setPages((pages) => [ ...pages, pages.length + 1 ]);

                    wait = true;

                    setTimeout(() => {
                        wait = false;
                    }, 600);
                }
            }


        }

        /**
         * @description Scroll e Wheel para funcionar em todos os navegadores
         */
        window.addEventListener('wheel', infiniteScrolling);

        window.addEventListener('scroll', infiniteScrolling);

    }, [infinite]);

    return (

        <section className='animeLeft'>
            {modalPhoto && 
                <FeedModal 
                    photo={modalPhoto} 
                    setModalPhoto={setModalPhoto} 
                />
            }

            {!hasPhotos && (
                <p className={styles.message}>Nenhuma foto encontrada.</p>
            )}

            {pages.map((page) => (

                <FeedPhotos 
                    key={page} 
                    user={user} 
                    page={page} 
                    setModalPhoto={setModalPhoto}
                    setInfinite={setInfinite}
                    setHasPhotos={setHasPhotos}
                />
            ))}

        </section>

    );
};

Feed.prototype = FeedProps;

export default Feed;