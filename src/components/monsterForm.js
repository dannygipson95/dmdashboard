import React from 'react'
import OptionList from './optionList'
import StyledContainer from '../styledComponents/styledContainer'

function MonsterForm(props){
    const {monsters, changeHandler, formVals, onMonsterSubmit} = props
    return(
        <StyledContainer>
            <h2>Enemies</h2>
            <form>
                <input
                name= 'monster'
                value={formVals.monster}
                onChange={changeHandler}
                placeholder='monstername'
                list='monsters'
                />
                <datalist id='monsters'>
                    <OptionList monsters={monsters}/>
                </datalist>
                <input
                name= 'mini'
                value={formVals.mini}
                onChange={changeHandler}
                placeholder='mini-name'
                />
                <button onClick={onMonsterSubmit}>Add Enemy</button>
            </form>
        </StyledContainer>
    )
}

export default MonsterForm