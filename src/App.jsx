import { Header } from './components/Header'
import { SideBar } from './components/Sidebar'

import styles from './App.module.css'
import './global.css'
import { Post } from './components/Post'

export const App = () => {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <SideBar />

        <main>
          <Post />
          <Post />
        </main>
      </div>
    </div>
  )
}
