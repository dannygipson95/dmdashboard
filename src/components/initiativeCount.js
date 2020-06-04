import React from 'react'

function InitiativeItem (props){
    const{initItem}=props
    return(
        <h4 className='init'>
            {initItem.count} - {initItem.name} 
        </h4>
    )
}

export default InitiativeItem;