import React, { useState, useEffect } from 'react'
import axios from 'axios'
const [notes, setNotes] = useState([])



 
 useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        console.log('promise fulfilled')
        setNotes(response.data)
      })
  }, [])
  console.log('render', notes.length, 'notes')




  axios
      .post('http://localhost:3001/notes', noteObject)
      .then(response => {
        setNotes(notes.concat(response.data))
        setNewNote('')
      })






      const Note = ({ note, toggleImportance }) => {
        const label = note.important
          ? 'make not important' : 'make important'
      
        return (
          <li>
            {note.content} 
            <button onClick={toggleImportance}>{label}</button>
          </li>
        )
      }

      



      const toggleImportanceOf = id => {
        console.log(
          'importance of ' + id + ' needs to be toggled'
        )
      }





      console.log(`importance of ${id} needs to be toggled`)






      const toggleImportanceOf = id => {
        const url = `http://localhost:3001/notes/${id}`
        const note = notes.find(n => n.id === id)
        const changedNote = { ...note, important: !note.important }
      
        axios.put(url, changedNote).then(response => {
          setNotes(notes.map(note => note.id !== id ? note : response.data))
        })
      }







      import axios from 'axios'
const baseUrl = 'http://localhost:3001/notes'

const getAll = () => {
  return axios.get(baseUrl)
}

const create = newObject => {
  return axios.post(baseUrl, newObject)
}

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject)
}

export default { 
  getAll: getAll, 
  create: create, 
  update: update 
}







const getAll = () => {
    const request = axios.get(baseUrl)
    const nonExisting = {
      id: 10000,
      content: 'This note is not saved to server',
      date: '2019-05-30T17:30:31.098Z',
      important: true,
    }
    return request.then(response => response.data.concat(nonExisting))
  }





  noteService
  .update(id, changedNote).then(returnedNote => {
    setNotes(notes.map(note => note.id !== id ? note : returnedNote))
  })
  .catch(error => {
    alert(
      `the note '${note.content}' was already deleted from server`
    )
    setNotes(notes.filter(n => n.id !== id))
  })
}






li {
    color: grey;
    padding-top: 3px;
    font-size: 15px;
  }





  const Notification = ({ message }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className="error">
        {message}
      </div>
    )
  }





  const [errorMessage, setErrorMessage] = useState('some error happened...')
  <Notification message={errorMessage} />
  .error {
    color: red;
    background: lightgrey;
    font-size: 20px;
    border-style: solid;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
  }

  noteService
      .update(changedNote).then(returnedNote => {
        setNotes(notes.map(note => note.id !== id ? note : returnedNote))
      })
      .catch(error => {
        setErrorMessage(
          `Note '${note.content}' was already removed from server`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
        setNotes(notes.filter(n => n.id !== id))
      })





      const Footer = () => {
        const footerStyle = {
          color: 'green',
          fontStyle: 'italic',
          fontSize: 16
        }
      
        return (
          <div style={footerStyle}>
            <br />
            <em>Note app, Department of Computer Science, University of Helsinki 2019</em>
          </div> 
        )
      }








