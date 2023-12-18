import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'

function App() {
  return (
    <div className="App">
      <React.Suspense fallback={'...loading'}>
        <Router>
          <Layout></Layout>
        </Router>
      </React.Suspense>
    </div>
  )
}

export default App
