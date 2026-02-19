import React from 'react';
import styles from './PhotoComments.module.css'
import { UserContext } from '../../../../contexts/UserContext';
import PhotoCommentsForm from '../PhotoCommentsForm/PhotoCommentsForm';

const PhotoComments = (props) => {

    const [comments, setComments] = React.useState(() => props.comments); 
    const commentsSection = React.useRef(null);
    const { login } = React.useContext(UserContext);

    React.useEffect(() => {

        commentsSection.current.scrollTop = commentsSection.current.scrollHeight;

    },[comments]);

    return (

        <section className={styles.wrapper}>

            <h3 className={styles.title}>Comentários</h3>

            {/*comentários*/}
            <ul ref={commentsSection} className={styles.comments}>
                {comments.map((comment) => (
                    <li key={comment.comment_ID}>
                    <b>{comment.comment_author}:</b>
                    <span>{comment.comment_content}</span>
                    </li>
                ))}
            </ul>

            {login && (
            <PhotoCommentsForm id={props.id} setComments={setComments} />
            )}
        </section>

    )
};

export default PhotoComments;
