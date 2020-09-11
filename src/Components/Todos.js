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

        this.handleClick = this.handleClick.bind(this)

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

        this.ulStyle = {
            listStyleType: 'none',
            margin: '0',
            padding: '0'
        }
    }

    handleClick(id) {
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
            handleClick={this.handleClick}
            />
        )
        return (
            <div style={this.divStyle}>
                <h1 style={this.h1Style}>React Todos</h1>
                <input type="text" name="newTodo" placeholder="Add New Todo"></input>
                <ul style={this.ulStyle}>
                    {todoItems}
                </ul>
            </div>
        )
    }
}

export default Todos