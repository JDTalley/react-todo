import React from 'react'

import ListItem from './ListItem'

class Todos extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <h1>Todos</h1>
                <ListItem />
                <ListItem />
                <ListItem />
            </div>
        )
    }
}

export default Todos