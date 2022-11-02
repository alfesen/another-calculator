import { ACTIONS } from '../reducer'

const DigitButton = ({ dispatch, digit }) => {
  return (
    <button
      onClick={() => dispatch({ type: ACTIONS.RENDER_OPERAND, payload: { digit } })}>
      {digit}
    </button>
  )
}

export default DigitButton