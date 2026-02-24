import React from 'react';
import styles from './SweelAlert.module.css';

const SweelAlert = ( {
    title,
    text, 
    duraction = 7000, 
    type = 'success'
}) => {

    const [ visible, setVisible ] = React.useState(true);

    React.useEffect(() => {
        
        const timer = setTimeout(() => {

            setVisible(false);

        }, duraction);

        return () => clearInterval(timer);

    }, [ duraction ]);

    if (!visible) return null;

    return (

        <div  className={`${styles.alert} ${styles[type]}`} role="alert">
           
            <h4 className={styles.title}>{title}</h4>
            <p className={styles.text}>{text}</p>
    
        </div>

    )
}

export default SweelAlert;
