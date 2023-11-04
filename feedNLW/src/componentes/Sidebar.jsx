import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css'
import { Avatar } from './Avatar'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://www.deviante.com.br/wp-content/uploads/2020/10/Direito-espacial.jpg" alt="" />

      <div className={styles.profile}>
        <Avatar src='https://github.com/caroldelira.png' />

        <strong>Ana Carolina</strong>
        <span>Desenvolvedora</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar Perfil
        </a>
      </footer>

    </aside>
  )
}

