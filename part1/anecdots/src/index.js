import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const App = (props) => {
    const [selected, setSelected] = useState(0)
    let voteArray = Array.apply(null, new Array(props.anecdotes.length)).map(Number.prototype.valueOf, 0);
    const [voted, setVoted] = useState([...voteArray])
    let rand = 0

    const showMostVoted = () =>{
        let mostArr=[...voted]
        mostArr.sort()
        let most=mostArr[voted.length-1]        
        const findMost=(val)=>{return val===most}
        let mostIndex=voted.findIndex(findMost)
        if (mostIndex===-1) return <></>
        return <div>
        {anecdotes[mostIndex]}<br/>
        has {most} votes.
        </div> 
       
         
    }

    const showRandom = () => {
        rand = Math.random()
        rand = rand * 25
        rand = Math.floor(rand)
        let leng = props.anecdotes.length
        if (rand >= leng) rand = 3
         setSelected(rand)
    }

    const vote = () => {
        voteArray = [...voted]
        voteArray[selected] = voted[selected] + 1
        setVoted(voteArray)


    }


    return (
        <div><h1>Anecdote of the day:</h1><br/>
            <div> {props.anecdotes[selected]} <br/>selected {voted[selected]} times
     </div>      <br /><button onClick={showRandom}>Next amecdots</button>
            <br></br><button onClick={vote}>Vote</button><br/>
            <h1>Anecdote with most votes</h1><br/>
        {showMostVoted()}
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)