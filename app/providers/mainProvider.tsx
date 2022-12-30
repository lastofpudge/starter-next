import React, { FC, PropsWithChildren } from 'react'
import Layout from "@/components/layout/Layout";

const MainProvider: FC<PropsWithChildren> = ({ children }) => {
  return <Layout>{children}</Layout>
}

export default MainProvider
