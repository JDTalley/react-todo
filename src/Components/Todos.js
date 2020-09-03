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

        this.divStyle = {
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            minWidth: '500px',
            maxWidth: '750px',
            textAlign: 'center',
            background: '#f7f7f7'
        }

        this.h1Style = {
            backgroundColor: '#2980b9',
	        color: 'white',
	        margin: '0',
	        padding: '10px 20px',
	        textTransform: 'uppercase',
	        fontSize: '24px',
	        fontWeight: 'normal',
        }
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
            <div style={this.divStyle}>
                <h1 style={this.h1Style}>Todos</h1>
                {todoItems}
            </div>
        )
    }
}

export default Todos