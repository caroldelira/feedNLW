/* eslint-disable react/prop-types */
import { useState } from 'react';
import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';

import styles from './Comment.module.css';

export function Comment({ url, content, onDeleteComment }) {

  const [like, setLike] = useState(0);
  
  function deleteComment() {
    onDeleteComment(content)
  }

  function handleLikeClick() {
    /* setLike(like + 1) */
    setLike((state) => {
      return state + 1;
    }) // dessa forma eu pego o valor mais atualizado do like
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src={url} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Ana Carolina</strong>
              <time title='02 de novembro às 23h44' dateTime='2023-11-02 23:44:23'>Cerca de 1h atrás</time>
            </div>

            <button
              title='Deletar comentário'
              onClick={deleteComment}
            >
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer className={styles.commentFooter}>
          
          <button onClick={handleLikeClick}><ThumbsUp /> Aplaudir <span>{like}</span></button> 
      </footer>
      </div>
    </div>
  )
}