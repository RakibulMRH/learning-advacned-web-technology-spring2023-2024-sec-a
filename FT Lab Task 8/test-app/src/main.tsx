import React from 'react'
import ReactDOM from 'react-dom/client'
import Test from './test.tsx'
import Table from './table.tsx'
import './index.css'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Test />
    <Table />
  </React.StrictMode>,
)
