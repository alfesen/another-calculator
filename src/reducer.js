export const ACTIONS = {
  RENDER_OPERAND: 'render-operand',
  CHOOSE: 'operator',
  CLEAR: 'clear',
  DELETE: 'delete',
  CALC: 'calculate',
}

const OPERATIONS = {
  ADD: '+',
  DIMINISH: '-',
  DIVIDE: '÷',
  MULTIPLY: '*',
}

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.RENDER_OPERAND:
      if (state.overwrite) {
        return { ...state, currentOperand: payload.digit, overwrite: false }
      }

      if (payload.digit === '0' && state.currentOperand === '0') return state
      if (
        state.currentOperand &&
        payload.digit === '.' &&
        state.currentOperand.includes('.')
      )
        return state

      return {
        ...state,
        currentOperand: `${state.currentOperand || ''}${payload.digit}`,
      }

    case ACTIONS.CLEAR:
      return {}

    case ACTIONS.CHOOSE:
      if (state.currentOperand == null && state.previousOperand == null) {
        return state
      }
      if (state.previousOperand == null) {
        return {
          ...state,
          operation: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: null,
        }
      }

      if (state.currentOperand === null) {
        return { ...state, operation: payload.operation }
      }

      return {
        ...state,
        previousOperand: evaluate(state),
        currentOperand: null,
        operation: payload.operation,
      }

    case ACTIONS.CALC:
      if (
        state.operation == null ||
        state.previousOperand == null ||
        state.currentOperand == null
      ) {
        return state
      }
      return {
        ...state,
        previousOperand: null,
        currentOperand: evaluate(state),
        operation: null,
        overwrite: true,
      }

    case ACTIONS.DELETE:
      if (state.currentOperand) {
        return { ...state, currentOperand: state.currentOperand.slice(0, -1) }
      } else return state

    default:
      return null
  }
}

const evaluate = ({ currentOperand, previousOperand, operation }) => {
  const previous = parseFloat(previousOperand)
  const current = parseFloat(currentOperand)
  if (isNaN(current) || isNaN(previous)) {
    return ''
  }
  let calc = ''
  switch (operation) {
    case OPERATIONS.ADD:
      calc = previous + current
      break
    case OPERATIONS.DIMINISH:
      calc = previous - current
      break
    case OPERATIONS.MULTIPLY:
      calc = previous * current
      break
    case OPERATIONS.DIVIDE:
      calc = previous / current
      break
    default:
      return ''
  }
  return calc.toString()
}
