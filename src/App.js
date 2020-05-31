import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import MonsterList from './components/monsterList'

function App() {
  const [monsters, setMonsters] = useState([])

  function getMonsters() {
    axios.get('http://dnd5eapi.co/api/monsters')
      .then(res =>{
        setMonsters(res.data.results)
      })
  }
  useEffect(()=>{
    getMonsters()
  }, [])
  return (

    <div>
      <MonsterList monsters={monsters}/>
    </div>
  );
}

export default App;
