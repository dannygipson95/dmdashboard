import React from 'react'
import StyledContainer from '../styledComponents/styledContainer'

function MonsterCard(props){
    const {monster} = props;
    
    return(
        <StyledContainer>
            <h2>{monster.name} ({monster.mini_name})</h2>
            <h4>ac: {monster.armor_class}</h4>
            <h4>hp: {monster.hit_points}</h4>
            <form>
                <select>
                    <option>--Select Condition--</option>
                    <option>Grappled</option>
                    <option>Poisoned</option>
                </select>
                <label>
                    Damage
                    <input
                        type='text'
                        className='damage'
                    />
                </label>
                <label>
                    Healing
                    <input
                        type='text'
                        className='healing'
                    />
                </label>
            </form>
        </StyledContainer>
    )
}

export default MonsterCard