import React from 'react'

function MonsterList(props){
    const {monsters} = props
    
    return(
        <div>
            {monsters.map(monster=>{
                return(
                    <p>{monster.name}</p>
                )
            })}
        </div>
    )
}

export default MonsterList