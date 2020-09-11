import React from 'react'

function TodoItem(props) {
    const completedStyle = {
        color: 'grey',
        textDecoration: 'line-through'
    }

    return (
        <li 
            style={props.item.completed ? completedStyle: null}
            onClick={() => props.handleClick(props.item.id)}>
            {props.item.text}
        </li>
    )
}

export default TodoItem