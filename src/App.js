import React from 'react'
import Carousel from './components/Carousel'
import Header from "./components/Header"
import Results from './components/Results'
import Footer from './components/Footer'
import Layout from './router/Layout'


const App = () => {
  return (
    <>
      <Header />
      <Carousel />
      <Results />
      <Footer />
      <Layout />
    </>
  )
}

export default App