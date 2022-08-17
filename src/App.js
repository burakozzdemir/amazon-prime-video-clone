import React from 'react'
import Carousel  from './components/Carousel'
import Header from "./components/Header"
import Layout from './router/Layout'


const App = () => {
  return (
    <>
      <Header />
      <Carousel />
      <Layout />
    </>
  )
}

export default App