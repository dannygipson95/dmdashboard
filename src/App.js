import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios'
import {v4} from 'uuid'
import MonsterForm from './components/monsterForm'
import MonsterCardContainer from './components/monsterCardContainer'
import Initiative from './components/initiativeContainer'
import FlexRow from './styledComponents/flexRow'


const initialInputVals = {
  monster: '',
  mini: ''
}

function App() {
  const [monsters, setMonsters] = useState([])
  const [monsterList, setMonsterList] = useState([])
  const [formVals, setFormVals] = useState(initialInputVals)


  function getMonsters() {
    axios.get('https://cors-anywhere.herokuapp.com/http://dnd5eapi.co/api/monsters')
      .then(res =>{
        setMonsters(res.data.results)
      })
      .catch(err=>{
        debugger
      })
      .finally(
      )
  }

  const changeHandler = event => {
    const value = event.target.value;
    const name = event.target.name;

    setFormVals({
      ...formVals,
      [name]: value
    })
  }

  const onMonsterSubmit = event =>{
    event.preventDefault()
    monsters.forEach(monster=>{
      if(monster.name === formVals.monster){
        axios.get(`https://cors-anywhere.herokuapp.com/http://dnd5eapi.co${monster.url}`)
          .then(res=>{
            const newMonster = {
            name: res.data.name,
            mini_name: formVals.mini,
            armor_class: res.data.armor_class,
            hit_points: res.data.hit_points
          }
          setMonsterList([...monsterList, newMonster])
          setFormVals(initialInputVals)
          })
        
      }
    })
  }

  useEffect(()=>{
    getMonsters()
  }, [])


  return (
    <FlexRow>
      <div className='column'>
      <Initiative/>
      </div>
      <div className='column'>
      <MonsterForm monsters={monsters} changeHandler={changeHandler} formVals={formVals} onMonsterSubmit={onMonsterSubmit}/>
      <MonsterCardContainer monsterList={monsterList} formVals={formVals} onChange={changeHandler}/>
      </div>
    </FlexRow>
  );
}

export default App;
