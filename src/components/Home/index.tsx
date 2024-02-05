'use client'

import styles from '@/components/Home/home.module.scss'
import { useCounterStore } from '@/store/counterStore'


const HomeComponent = () => {
  const { count, increment, decrement } = useCounterStore()

  return (
    <>
      <div className={styles.description}>
        <h1>Counter: {count}</h1>

        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </>
  )
}
export default HomeComponent
