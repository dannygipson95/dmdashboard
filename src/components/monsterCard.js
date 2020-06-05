import React, {useState} from 'react'
import StyledContainer from '../styledComponents/styledContainer'
import {useInput} from '../hooks/useInput'



function MonsterCard(props){
    const {monster, onChange, formVals} = props;
    // const [hp, setHp] = useState(monster.hit_points);
    // const [healVal, setHealVal] = useState(formVals.healing);
    // const [damVal, setDamVal] = useState(formVals.damage)
    // const [conVal, setConVal] = useState(formVals.condition);

    const [hp, setHp] = useState(monster.hit_points);
    const [healing, setHealing, handleHealing] = useInput('');
    const [damage, setDamage, handleDamage] = useInput('');

    
    function changeHp(event){
        event.preventDefault();
        setHp(Number(hp)-Number(damage)+Number(healing));
        event.target.value = ''
        setHealing('');
        setDamage('');
    }

    return(
        <StyledContainer>
            <h2>{monster.name} ({monster.mini_name})</h2>
            <h4>ac: {monster.armor_class} &nbsp;&nbsp;&nbsp;&nbsp; hp: {hp}</h4>
            <form onSubmit={changeHp}>
                <select>
                    <option>--Select Condition--</option>
                    <option>Blinded</option>
                    <option>Charmed</option>
                    <option>Deafened</option>
                    <option>Frightened</option>
                    <option>Grappled</option>
                    <option>Incapacitated</option>
                    <option>Invisible</option>
                    <option>Paralyzed</option>
                    <option>Petrified</option>
                    <option>Poisoned</option>
                    <option>Prone</option>
                    <option>Restrained</option>
                    <option>Stunned</option>
                    <option>Unconscious</option>
                </select>
                <input
                    type='text'
                    placeholder='Damage'
                    autoComplete='off'
                    className='damage'
                    name='damage'
                    value={damage}
                    onChange={event => handleDamage(event.target.value)}
                    
                />
                <input
                    type='text'
                    placeholder='Healing'
                    autoComplete='off'
                    className='healing'
                    name='healing'
                    value={healing}
                    onChange={event => handleHealing(event.target.value)}
                />
                <button>submit</button>
            </form>
        </StyledContainer>
    )
}

export default MonsterCard