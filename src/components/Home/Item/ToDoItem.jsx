import React from 'react'
import Check from './Check'
import { BsTrash } from 'react-icons/bs'

const ToDoItem = ({ item, changeTodo, removeTodo }) => {
    return (
        <div className='flex items-center justify-between mb-4 rounded-2xl bg-zinc-800 p-5 w-full'>

            <button onClick={() => changeTodo(item.id)} className='flex items-center'>
                <Check isCompleted={item.isCompleted} />
                <span className={`${item.isCompleted ? 'line-through' : ''}`}>{item.title}</span>
            </button>

            <button onClick={() => removeTodo(item.id)}>
                <BsTrash size={22} className='text-gray-600 hover:text-red-700 transition-colors ease-out duration-300  ' />
            </button>
        </div>
    )
}

export default ToDoItem