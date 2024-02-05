import styles from '../components/Home/home.module.scss'
import HomeComponent from '@/components/Home'
import { HomeService } from '@/services/home.service'

const Home = () => {
  return (
    <main className={styles.main}>
      <HomeComponent />
    </main>
  )
}

export default Home

export async function generateMetadata() {
  const metadata = await HomeService.getMeta()

  const canonical = `http://localhost:3000/`

  return {
    title: metadata.homepage.title,
    description: metadata.homepage.description,
    alternates: {
      canonical: canonical
    },
    openGraph: {
      title: metadata.homepage.title,
      description: metadata.homepage.description,
      url: canonical
    }
  }
}
