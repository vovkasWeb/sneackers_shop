import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './index.scss'
import App from './App'
import 'macro-css'
import Header from './components/Header'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Router>
	<App/>
    </Router>
)
