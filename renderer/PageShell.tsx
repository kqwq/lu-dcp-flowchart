import React from 'react'
import type { PageContext } from './types'
import Navbar from '../src/components/Navbar'
import { ChakraProvider } from '@chakra-ui/react'

export { PageShell }

function PageShell({ children, pageContext }: { children: React.ReactNode; pageContext: PageContext }) {
  return (
    <React.StrictMode>
      <ChakraProvider>
        <Navbar />
        {children}
      </ChakraProvider>
    </React.StrictMode>
  )
}
