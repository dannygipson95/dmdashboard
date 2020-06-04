import React from 'react'
import MonsterCard from './monsterCard'

function MonsterCardContainer(props){
    const {monsterList, monsters} = props;

    return(
        <div>
            {monsterList.map(monster=>{
                return(
                    <MonsterCard monster={monster}/>
                )
            })}
        </div>
    )
}

export default MonsterCardContainer;