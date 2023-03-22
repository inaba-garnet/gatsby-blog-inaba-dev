import * as React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import Navbar from "./navbar"
import { Container } from '@chakra-ui/react'

const Layout = ({children}) => {
  return (
    <ChakraProvider>
      <Navbar></Navbar>
      <Container maxW='container.lg' color='blue-900'>
        {children}
      </Container>
    </ChakraProvider>
  )
}

export default Layout

