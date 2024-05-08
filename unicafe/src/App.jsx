import { useState } from 'react'

const SectionHeader = ({ title }) => <h2>{title}</h2>

const Button = ({ onClick, label }) => <button onClick={onClick}>{label}</button>

const NoFeedback = () => <p>No feedback given</p>

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  const average = (good - bad) / total
  const positive = `${(good / total) * 100}%`

  if (!total) {
    return <NoFeedback />
  }

  return (
    <table>
      <tbody>
        <StatisticLine text={'good'} value={good} />
        <StatisticLine text={'neutral'} value={neutral} />
        <StatisticLine text={'bad'} value={bad} />
        <StatisticLine text={'all'} value={total} />
        <StatisticLine text={'average'} value={average} />
        <StatisticLine text={'positive'} value={positive} />
      </tbody>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <SectionHeader title={'give feedback'} />
      <Button onClick={() => setGood(good + 1)} label={'good'} />
      <Button onClick={() => setNeutral(neutral + 1)} label={'neutral'} />
      <Button onClick={() => setBad(bad + 1)} label={'bad'} />
      <SectionHeader title={'statistics'} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App