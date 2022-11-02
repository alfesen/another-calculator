import { ACTIONS } from '../reducer'

const OperationButton = ({ dispatch, operation }) => {
  return (
    <button
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE, payload: { operation } })
      }>
      {operation}
    </button>
  )
}

export default OperationButton