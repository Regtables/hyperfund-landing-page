import React from 'react'

import { Navbar } from './Components'
import { Header, Benefits, Schedule, Speakers, CTABig, Footer } from './Containers'

import './App.css'

const App = () => {
  return (
      <div className = 'app'>
          <header>
              <nav>
                  <Navbar />
              </nav>
              <Header />
          </header>
          <main>
              <Benefits />
              <Schedule />
              <Speakers />
              <CTABig />
          </main>
          <footer>
              <Footer />
          </footer>
      </div>
  )
}

export default App
