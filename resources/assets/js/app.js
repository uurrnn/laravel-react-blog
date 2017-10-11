require('./bootstrap')

import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from 'react-router-dom'

import Layout from "./components/Layout"

const App = () => (
    <div>
        <Layout />
    </div>
);
  
ReactDOM.render(
    <App />,
    document.getElementById('app')
)