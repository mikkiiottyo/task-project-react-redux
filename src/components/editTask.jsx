import React, { useState } from 'react'
import { useDispatch } from 'react-redux'


const EditTask = ({task,className}) => {
const [isEdit, setIsEditing] = useState(false) 
const [title, setTitle] = useState ('')
const [description, setDescription] = useState('')
const [status, setStatus] = useState('To Do')
const dispatch = useDispatch()
  return (
    <div>
       <button className={className} 
       onClick={() => setIsEditing(true)}>Edit
       </button>
    </div>
  )
}
export default EditTask