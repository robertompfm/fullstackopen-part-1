import { useState } from 'react'

const SectionHeader = ({ title }) => <h2>{title}</h2>

const Anecdote = ({ anecdote }) => <p>{anecdote}</p>

const Button = ({ onClick, label }) => <button onClick={onClick}>{label}</button>

const App = () => {
  const anecdotesList = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [anecdotes, setAnecdotes] = useState(anecdotesList.map((anecdote) => ({ anecdote, votes: 0 })))

  const handleNextAnecdote = () => {
    const newSelected = Math.floor(Math.random() * anecdotes.length)

    setSelected(newSelected)
  }

  const handleVote = () => {
    const updatedAnecdotes = [ ...anecdotes ]

    updatedAnecdotes[selected].votes += 1

    setAnecdotes(updatedAnecdotes)
  }

  const mostVoted = anecdotes.toSorted((a, b) => b.votes - a.votes)[0]

  return (
    <div>
      <SectionHeader title={'Anecdote of the day'} />
      <Anecdote anecdote={anecdotes[selected].anecdote} />
      <Button onClick={handleVote} label={'vote'} />
      <Button onClick={handleNextAnecdote} label={'next anecdote'} />
      <SectionHeader title={'Anecdote with most votes'} />
      <Anecdote anecdote={mostVoted.anecdote} />
    </div>
  )
}

export default App