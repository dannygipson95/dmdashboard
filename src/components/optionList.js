import React from 'react'
import {v4} from 'uuid'

function OptionList(props){
    const {monsters} = props
    return(
        <div>
            {monsters.map(monster=>{
                return(
                    <option key={v4()}>{monster.name}</option>
                )
            })}
        </div>
    )
}

export default OptionList