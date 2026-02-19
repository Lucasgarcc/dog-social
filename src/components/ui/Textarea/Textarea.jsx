import React from 'react'
import styles from './Textarea.module.css';

const Textarea = ({	
    name, 
    type,
    value, 
    placeholder, 
    onChange,
    error,
    onBlur,
    onKeyDown

    }) => {
    
    return (

        <div className={styles.wrapper}>

            <textarea
                id={name}
                className={styles.textarea}
                name={name}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                onBlur={onBlur}
                onKeyDown={onKeyDown}
            />
            {error &&
                <span className={styles.error}>
                    {error}
                </span> 
            }
        </div>

    )
}

export default Textarea;
