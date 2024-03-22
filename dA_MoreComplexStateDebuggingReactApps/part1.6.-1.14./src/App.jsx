import { useState } from 'react'

const BottonFeedback = (props) => {
  return (
    <button onClick={props.click}>{props.feedback}</button>
  )
}

const StatisticLine = (props) => {
  return (
    <p>{props.text}: {props.value}</p>
  )
}

const Statistics = (props) => {
  const all = (props.good + props.neutral + props.bad);
  const average = (((props.good*1)+(props.neutral*0)+(props.bad*(-1))) /all);
  const positive_feedback = ((props.good*100)/all) + " %";
  return(
    <>
      <h4>Statics</h4>
      <StatisticLine text="Good" value={props.good} />
      <StatisticLine text="Neutral" value={props.neutral} />
      <StatisticLine text="Bad" value={props.bad} />
      <StatisticLine text="All" value={all} />
      <StatisticLine text="Average" value={average} />
      <StatisticLine text="Positive" value={positive_feedback} />
    </>
  )
}

const NoStatistics = () => {
  return (
    <p>No feedback given</p>
  )
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [showStatistics, setShowStatistics] = useState(false);

  const clickGood = () => {
    setGood(good + 1);
    setShowStatistics(true);
  }

  const clickNeutral = () => {
    setNeutral(neutral + 1);
    setShowStatistics(true);
  }

  const clickBad = () => {
    setBad(bad + 1);
    setShowStatistics(true);
  }

  return (
    <div>
      <h3>Give Feedback</h3>
      <BottonFeedback click={clickGood} feedback="Good" />
      <BottonFeedback click={clickNeutral} feedback="Neutral" />
      <BottonFeedback click={clickBad} feedback="Bad" />

      {showStatistics ? <Statistics good={good} neutral={neutral} bad={bad} /> : <NoStatistics />}
    </div>
  )
}

export default App
