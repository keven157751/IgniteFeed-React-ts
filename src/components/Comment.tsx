import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
    function handleDeleteComment() {
        onDeleteComment(content); 

    } 
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/keven157751.png" alt="" />


            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header className={styles.header}>
                        <div className={styles.authorAndTime}>
                            <strong className={styles.commentName}>Keven Willian</strong>
                            <time className={styles.time} title='11 de Maio às 08:13h' dateTime='2023-08-08 08:13:30'>Cerca de 1H atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar Comentário'>
                            <Trash size={20} />
                        </button>

                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}