import React from 'react'
import MonsterCard from './monsterCard'

function MonsterCardContainer(props){
    const {monsterList, onChange, formVals} = props;

    return(
        <div>
            {monsterList.map(monster=>{
                return(
                    <MonsterCard monster={monster} onChange={onChange} formVals={formVals}/>
                )
            })}
        </div>
    )
}

export default MonsterCardContainer;