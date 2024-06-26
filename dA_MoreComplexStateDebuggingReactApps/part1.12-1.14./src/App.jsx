import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  //Hook anecdote
  const [selected, setSelected] = useState(0)

  const next_anecdote = () => {
    function random_num(min,max) {
      return Math.floor(Math.random() * (max-min + 1)) +min;
    }
    const number = random_num(0,((anecdotes.length)-1));
    setSelected(number);
  }

  //Hook points
  const [point, setPoint] = useState(Array(anecdotes.length).fill(0))
  
  const make_vote = () => {
    const copy = [...point]
    copy[selected] = (copy[selected] + 1);
    setPoint(copy);
  };

  const vote = point[selected];

  //Find anecdote with most vote
  let maxIndex = 0;
  let maxValue = point[0];
  for (let i = 1; i < point.length; i++) {
    if (point[i] > maxValue) {
      maxValue = point[i];
      maxIndex = i;
    }
  }
  
  return (
    <div>
      <h3>Anecdote of the day</h3>
      <p>{anecdotes[selected]}</p>
      <p>Has {vote} votes</p>
      <button onClick={make_vote}>Vote</button>
      <button onClick={next_anecdote}>Next anecdote</button>
      <h3>Anecdote with most votes</h3>
      <p>{anecdotes[maxIndex]}</p>
    </div>
  )
}

export default App