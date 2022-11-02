import { useReducer } from 'react'
import { reducer, ACTIONS } from './reducer'
import DigitButton from './components/DigitButton'
import OperationButton from './components/OperationButton'

const formatInteger = new Intl.NumberFormat('en-us', {
  maximumFractionDigits: 0,
})

const formatOperand = operand => {
  if (operand == null) return
  console.log(operand)
  const [integer, decimal] = operand.split('.')
  if (decimal == null) return formatInteger.format(integer)
  return `${formatInteger.format(integer)}.${decimal}`
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, {})

  const digits = []

  for (let i = 1; i < 10; i++) {
    digits.push(i.toString())
  }

  const digitButtons = digits.map(digit => {
    return (
      <DigitButton key={`${digit}_key`} digit={digit} dispatch={dispatch} />
    )
  })

  return (
    <div className='calculator'>
      <div className='display'>
        <div className='previous'>
          {formatOperand(state.previousOperand)}&nbsp; {state.operation}
        </div>
        <div className='current'>{formatOperand(state.currentOperand)}</div>
      </div>
      <div className='button-row'>
        <button onClick={() => dispatch({ type: ACTIONS.CLEAR })} className=''>
          AC
        </button>
        <button onClick={() => dispatch({ type: ACTIONS.DELETE })}>DEL</button>
        <OperationButton operation='÷' dispatch={dispatch} />
      </div>
      <div className='middle'>
        <div className='digits'>{digitButtons}</div>
        <div className='operations'>
          <OperationButton operation='*' dispatch={dispatch} />
          <OperationButton operation='+' dispatch={dispatch} />
          <OperationButton operation='-' dispatch={dispatch} />
        </div>
      </div>

      <div className='button-row'>
        <DigitButton digit='.' dispatch={dispatch} />
        <DigitButton digit='0' dispatch={dispatch} />
        <button
          onClick={() => dispatch({ type: ACTIONS.CALC })}
          className='span-two'>
          =
        </button>
      </div>
    </div>
  )
}

export default App
