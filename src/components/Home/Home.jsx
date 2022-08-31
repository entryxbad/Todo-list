import React, { useState } from 'react'
import { data } from '../../data/data'
import CreateTodoField from './Item/CreateTodoField'
import ToDoItem from './Item/ToDoItem'

const Home = () => {

    const [todos, setTodos] = useState(data)

    const changeTodo = (id) => {
        const copy = [...todos]
        const current = copy.find(t => t.id === id)
        current.isCompleted = !current.isCompleted
        setTodos(copy)
    }

    const removeTodo = (id) => {
        setTodos([...todos].filter(t => t.id !== id))
    }

    return (
        <div className='text-white w-4/5 mx-auto max-w-[640px]'>
            <h1 className='text-2xl font-bold text-center mb-10'>My todo list</h1>
            {todos.map(item => {
                return (
                    <ToDoItem key={item.id} item={item} changeTodo={changeTodo} removeTodo={removeTodo} />
                )
            })}

            <CreateTodoField setTodos={setTodos} />
        </div>
    )
}

export default Home