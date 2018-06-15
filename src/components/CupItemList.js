import React from 'react'
import CupItem from './CupItem'

function CupItemList(props) {
    const cups = props.cups.map(cup => {
            return <CupItem 
                key={cup.id}
                id={cup.id} 
                handleRemove={props.removeCup} 
                name={cup.name} 
            />
    })
    return <ul>
    {cups}
    </ul>
}

export default CupItemList