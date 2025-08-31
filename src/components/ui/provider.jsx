'use client'

import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { ColorModeProvider } from './color-mode'
import ChakraProviders from '../../../components/chakraProvider'

import Router from 'next/router'
import Head from 'next/head'
import nProgress from 'nprogress'

import RootLayout from '@/app/layout'

export function Provider({children}) {
  return (
        <ChakraProviders> 
            <ColorModeProvider>
                {children} {/* Render the children */}
            </ColorModeProvider>
        </ChakraProviders>
  )
}
