import s from './Operators.module.scss'

type Props = {
  operators: string[]
  updateCalc: (val: string) => void
  percentage: () => void
  reset: () => void
  deleteLast: () => void
}

const Operators = (props: Props) => {
  const { operators, updateCalc, percentage, reset, deleteLast } = props

  return (
    <div className={s.operators}>
      {operators.slice(0, -1).map(op => (
        <button key={op} onClick={() => updateCalc(op)}>
          {op}
        </button>
      ))}

      <button onClick={percentage}>%</button>
      <button onClick={reset}>C</button>
      <button onClick={deleteLast}>{'<='}</button>
    </div>
  )
}

export default Operators
