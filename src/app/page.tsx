import styles from '../components/Home/home.module.scss'
import HomeComponent from '@/components/Home'

export default function Home() {
  return (
    <main className={styles.main}>
      <HomeComponent />
    </main>
  )
}
