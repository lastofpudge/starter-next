import type { AppProps } from 'next/app'

import MainProvider from '@/providers/mainProvider'

type TypeAppProps = AppProps

const App = ({ Component, pageProps }: TypeAppProps) => {
  return (
    <MainProvider>
      <Component {...pageProps} />
    </MainProvider>
  )
}

export default App
