'use client'

import { FC, ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

interface ReactQueryProviderProps {
  children: ReactNode;
}

const queryClient = new QueryClient()

const ReactQueryProvider: FC<ReactQueryProviderProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

export default ReactQueryProvider