import React from 'react'
import styles from './Skeleton.module.css';

const Skeletion = ({alt, ...props}) => {

    const [skeleton, setSkeleton] = React.useState(true);

    const loaded = ({target}) => {

        setSkeleton(false);
        target.style.opacity = 1;
    
    }

    return (

        <div className={styles.wrapper}>

            {skeleton &&
                <div className={styles.skeleton}></div>
            }
        
            <img onLoad={loaded} className={styles.img} alt={alt} {...props} />

        </div>

    )
}

export default Skeletion;
