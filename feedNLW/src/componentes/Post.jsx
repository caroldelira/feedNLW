/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react'

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post({ author, publishedAt, content }) {

  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState('')


  const publisheDataFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
  })

  function handleComment() {
    event.preventDefault();

    setComments([...comments, newComment]);
    setNewComment('');
  }

  function handleNewComment() {
    setNewComment(event.target.value)
  }

  function handleDeleteComment(comment) {
    const valueComment = comments.filter(item => item !== comment); 
    
    setComments(valueComment);
  
  }

  const isCommentEmpty = newComment.length === 0;

  return (
    <>
      <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} alt="" />
          <div className={styles.authorInfo}>
              <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
          </div>
          
          <time className={styles.time} title={publisheDataFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
        </header>
     
        <div className={styles.content}>
          
          {content.map(item => {
            if (item.type === 'paragraph') {
              return <p key={item.content}>{item.content}</p>;
            } else if (item.type === 'link') {
              return <p key={item.content}><a href="">{item.content}</a></p>
            }
          })}
  
        </div>

        <form onSubmit={handleComment} className={styles.commentForm}>
          <strong>Deixe seu comentário</strong>

          <textarea
            placeholder='Deixe seu comentário'
            onChange={handleNewComment}
            value={newComment}
          />

          <footer>
            <button type='submit' disabled={isCommentEmpty}>Comentar</button>
          </footer>
        </form>

        <div className={styles.commentList}>
          {comments.map(comment => {
            return(
              <Comment
                key={comment}
                url='https://github.com/OThyagoCarvalho.png'
                content={comment}
                onDeleteComment={handleDeleteComment}
              />)
          })}
        </div>
      </article>
    </>
  )
}