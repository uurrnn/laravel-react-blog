require('./bootstrap')

import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from 'react-router-dom'

import Layout from "./components/Layout"
import Header from "./components/Header"
import Footer from "./components/Footer"

const App = () => (
    <div>
        <Header />
        <Layout />
        <Footer />
    </div>
);
  
ReactDOM.render(
    <App />,
    document.getElementById('app')
)