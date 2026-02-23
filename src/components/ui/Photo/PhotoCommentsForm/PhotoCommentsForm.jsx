import React from 'react';
import styles from './PhotoCommentsForm.module.css';
import IconComment from '../../../../assets/img/enviar.svg?react';
import useFetch from '../../../../hooks/useFetch/useFetch';
import {COMMENT_POST} from '../../../../routes/endpoints/endpoints'
import useForm from '../../../../hooks/useForm/useForm';
import Textarea from '../../Textarea/Textarea';
import Error from '../../../Helpers/Error/Error';

const PhotoCommentsForm = ({id, setComments, single}) => {

    const field = useForm({
        comment: 'comment'
    })

    const {request, error} = useFetch();

    const sendComment = async (e)  => {

        e.preventDefault();

        if (!field.validateAll()) return;

        const token = window.localStorage.getItem('token');
        const { url, options } = COMMENT_POST(id, field.values, token);

        const {json, resp} =  await request(url, options);
    
        if (resp.ok) {
            field.values.comment = '';
            setComments((comments) => [...comments, json]);
        }

    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendComment(e);
        }
    };

    return (

        <form className={`${styles.formComment} ${single ? styles.single : ''}`} onSubmit={sendComment}>
            <Textarea
                id="comment"
                name="comment"
                placeholder="O que você acha disso?"
                onKeyDown={handleKeyDown}
                {...field.comment}
            />
            <button className={styles.button} disabled={!field.values.comment}>
                <IconComment />
            </button>

            {error &&
                <Error error={error} />
            }
    
        </form>

    )
};

export default PhotoCommentsForm;
