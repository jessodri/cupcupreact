import React from 'react'

function CupItem(props) {
    
    return <li>{props.name} <button onClick={() => {
        props.handleRemove(props.id)
    }}>X</button></li>
}

export default CupItem