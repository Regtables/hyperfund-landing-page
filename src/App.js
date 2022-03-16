import React from 'react'

import { Navbar, Partition } from './Components'
import { Header, Benefits, Schedule, Speakers, CTABig, Footer } from './Containers'

import './App.css'

const App = () => {
  return (
      <div className = 'app'>
          <header>
              <nav>
                  <Navbar />
              </nav>
              <Header 
                    date = 'April 15, 2022'
                    time = '11:00 AM' 
              />
          </header>
          <main>
              <Benefits />
                <Partition />
              <Schedule />
                <Partition />
              <Speakers />
                <Partition />
              <CTABig />
                <Partition />
          </main>
          <footer>
              <Footer />
          </footer>
      </div>
  )
}

export default App
