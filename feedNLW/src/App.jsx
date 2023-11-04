import { Header } from './componentes/Header'
import { Sidebar } from './componentes/Sidebar'
import { Post } from './componentes/Post'

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'http://github.com/caroldelira.png',
      name: 'Ana Carolina',
      role: 'Desenvolvedora'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifolio. É uma linha do tempo para uma agencia de Marketing 🚀🚀🚀' },
      { type: 'link', content: '@digitalplaces' },
    ],
    publishedAt: new Date('2023-11-02 23:44:23')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'http://github.com/OThyagoCarvalho.png',
      name: 'Thiago Carvalho',
      role: 'Desenvolvedor'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifolio. É uma linha do tempo para uma agencia de Marketing 🚀🚀🚀' },
      { type: 'link', content: '@digitalplaces' },
    ],
    publishedAt: new Date('2023-11-03 18:24:23')
  },
];

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map( post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>

    </>
  )
}
