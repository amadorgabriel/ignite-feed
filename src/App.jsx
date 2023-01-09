import { Header } from './components/Header'
import { SideBar } from './components/Sidebar'

import styles from './App.module.css'
import './global.css'

export const App = () => {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <SideBar />

        <main>Main</main>
      </div>
    </div>
  )
}
