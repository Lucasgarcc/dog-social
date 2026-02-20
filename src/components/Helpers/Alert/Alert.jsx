import React from 'react';
import styles from './Alert.module.css';

const Alert = ({
    message,
    onConfirm,
    onClose,
    duration,
}) => {

  
    React.useEffect(() => {

        if (!message || onConfirm || !duration) return;

        const timer = setTimeout(() => {
            onClose?.();
        }, duration);

        return () => clearTimeout(timer);

    }, [ message, duration, onConfirm, onClose ]);


    if (!message) return null;

    return (

        <div className={styles.container}>
    
            <p>{message}</p>

            <div className={styles.buttons}>
    
                {onConfirm && (
                    <button
                        className={styles.buttonConfirm}
                        onClick={onConfirm}
                    >
                        Confirmar
                    </button>
                )}

                <button
                    className={styles.buttonBack}
                    onClick={onClose}
                >
                    Voltar
                </button>
            
            </div>
        
        </div>
    );
};

export default Alert;
