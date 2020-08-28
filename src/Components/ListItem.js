import React from 'react'

class ListItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <input type='checkbox'></input>
                <p>Todo Item</p>
            </div>
        )
    }
}

export default ListItem