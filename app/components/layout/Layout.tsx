import { FC, PropsWithChildren } from 'react'

import '@/styles/globals.css'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return <>{children}</>
}

export default Layout
