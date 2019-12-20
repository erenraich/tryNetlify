import React from 'react'
import ReactDOM from 'react-dom'
import App from './App' 
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';

axios.get('http://localhost:3001/notes').then(response => {
  const notes = response.data
  console.log(notes)
  ReactDOM.render(
    <App notes2={notes} />,
    document.getElementById('root')
  )
})