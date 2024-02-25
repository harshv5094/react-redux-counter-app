import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './reducer/counterReducer'
import './App.css'

function App() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()
  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <h1>Counter App</h1>
      <span style={{ fontSize: '2em' }}>{count}</span>
      <div style={{ display: 'flex' }}>
        <button
          onClick={() => {
            dispatch(increment())
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch(decrement())
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            dispatch(reset())
          }}
        >
          reset
        </button>
      </div>
    </main>
  )
}

export default App
