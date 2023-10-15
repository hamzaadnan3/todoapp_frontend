import React from 'react'

const TodoItem = ({title,description,isCompleted,updateHandler,deleteHandler,id}) => {
  return (
    <div className='todo'>
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
        <div>
            <input onChange={()=>updateHandler(id)} type="checkbox" checked={isCompleted} />
            <button onClick={()=>deleteHandler(id)} className='btn'>Delete</button>
        </div>
    </div>
  )
}

export default TodoItem