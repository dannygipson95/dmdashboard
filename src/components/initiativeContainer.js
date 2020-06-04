import React, {useState, useEffect} from 'react'
import InitiativeItem from './initiativeCount'
import StyledContainer from '../styledComponents/styledContainer'

const firstInitiativeVals = {
    name: '',
    count: ''
}


function Initiative(){
    const [initVals, setInitVals]=useState(firstInitiativeVals)
    const [initList, setInitList] = useState([])

    const onInitChange = event=>{
        const value = event.target.value;
        const name = event.target.name;

        setInitVals({
            ...initVals,
            [name]: value
        })
    }

    function compare(a,b){
        const initA = a.count;
        const initB = b.count;
        return initB - initA;
    }

    let sortedInit = initList.sort(compare)

    const onInitSubmit = event =>{
        event.preventDefault();
        const newInit = {
            name: initVals.name,
            count: initVals.count
        }
        setInitList([...initList, newInit])
        setInitVals(firstInitiativeVals)
    }

    useEffect(() =>{
        console.log(sortedInit)
    }, [initList])
    return(
        <StyledContainer>
            <h2>Initiative</h2>
            <form onSubmit={onInitSubmit}>
                <input
                    type='text'
                    name='name'
                    placeholder='name'
                    value={initVals.name}
                    onChange={onInitChange}
                />
                <input
                    type='text'
                    name='count'
                    placeholder='count'
                    value={initVals.count}
                    onChange={onInitChange}
                />
                <button>Add</button>
            </form>
            <div>
                {initList.map(item=>{
                    return(
                        <InitiativeItem initItem={item}/>
                    )
                })}
            </div>
        </StyledContainer>
    )
}

export default Initiative