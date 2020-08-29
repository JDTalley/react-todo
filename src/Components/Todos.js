import React from 'react'

import TodoItem from './TodoItem'

class Todos extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: [
                {
                    id: 1,
                    text: 'Todo 1',
                    completed: true
                },
                {
                    id: 2,
                    text: 'Todo 2',
                    completed: false
                },
                {
                    id: 3,
                    text: 'Todo 3',
                    completed: false
                }
            ]
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }

    render() {
        const todoItems = this.state.todos.map(item => 
            <TodoItem 
                key={item.id} 
                item={item}
                handleChange={this.handleChange}
            />)

        return (
            <div>
                <h1>Todos</h1>
                {todoItems}
            </div>
        )
    }
}

export default Todos