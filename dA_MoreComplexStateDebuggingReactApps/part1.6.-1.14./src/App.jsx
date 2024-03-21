import { useState } from 'react'

const Statistics = ({good, neutral, bad}) => {

  const all = (good + neutral + bad);
  const average = (((good*1)+(neutral*0)+(bad*(-1)))/all);
  const positive_feedback = ((good*100)/all);

  return(
    <>
      <h4>Statics</h4>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {all}</p>
      <p>Average: {average}</p>
      <p>Positive: {positive_feedback} %</p>
    </>
  )
}

const App = () => {

  //guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const clickGood = () => {
    setGood(good + 1);
    console.log(good);
  }

  const clickNeutral = () => {
    setNeutral(neutral + 1);
    console.log(neutral);
  }

  const clickBad = () => {
    setBad(bad + 1);
    console.log(bad);
  }

  return (
    <div>
      <h3>Give Feedback</h3>
      <button onClick={clickGood}>Good</button>
      <button onClick={clickNeutral}>Neutral</button>
      <button onClick={clickBad}>Bad</button>

      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>

    </div>
  )
}

export default App
