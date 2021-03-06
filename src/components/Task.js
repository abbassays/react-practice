import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, toggle }) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`}
     onDoubleClick={() => toggle(task.id)} >
      <h3>{task.name}
        <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(task.id)} />
      </h3>
      <p>{task.days}</p>
    </div>
  )
}

export default Task
