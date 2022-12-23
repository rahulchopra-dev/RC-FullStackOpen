import { useState } from 'react'


const MostVotes = (props) => {
  if(!(props.votees[0].every(item => item === 0))){
  return (
    <>
    <h2>Anecdote with most votes</h2>
    <p>{props.anecdote} has {props.votees[1]} votes.</p>
    </>
  )
}
  return (<></>);
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  const votesArr = Array(anecdotes.length).fill(0)
  const [votes, setVotes] = useState(votesArr)
  const [selected, setSelected] = useState(0)
  
  //Max votes
  let maxVotes = Math.max(...votes)
  let maxVotesIndx = votes.indexOf(Math.max(...votes))
  
  const handleClick = () => {
    let random = Math.floor(Math.random()*anecdotes.length);
    setSelected(random);
  }

  const castVote = (index) => () =>{
    let newArr = [...votes];
    newArr[index]++
    setVotes(newArr)
  }

  return (
    <div>
      <h1>anecdote of the day</h1>
      <p>{anecdotes[selected]} has <br/>{votes[selected]} votes.</p>
      <button onClick={castVote(selected)}>vote</button>
      <button onClick={handleClick}>next anecdote</button>
      <MostVotes votees={[votes, maxVotes]} anecdote={anecdotes[maxVotesIndx]}/>
    </div>
  )
}

export default App