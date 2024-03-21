import { useState } from 'react'

const App = () => {

  //guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const clickGood = () => {
    setGood(good => good + 1);
    console.log(good);
  }

  const clickNeutral = () => {
    setNeutral(neutral => neutral + 1);
    console.log(neutral);
  }

  const clickBad = () => {
    setBad(bad => bad +1);
    console.log(bad);
  }

  return (
    <div>
      <h3>Give Feedback</h3>
      <button onClick={clickGood}>Good</button>
      <button onClick={clickNeutral}>Neutral</button>
      <button onClick={clickBad}>Bad</button>

    </div>
  )
}

export default App
