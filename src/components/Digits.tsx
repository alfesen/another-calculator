import s from './Digits.module.scss'

type Props = {
  updateCalc: (val: string) => void;
  calculate: () => void;
  dotted: boolean;
}

const Digits = (props: Props) => {
  const digits: number[] = []

  for (let i = 1; i < 10; i++) {
    digits.push(i)
  }

  const { updateCalc, calculate, dotted} = props

  return (
    <div className={s.digits}>
      {digits.map(dig => (
        <button key={dig} onClick={() => updateCalc(dig.toString())}>
          {dig}
        </button>
      ))}
      <button onClick={() => updateCalc(dotted ? '' : '.')}>.</button>
      <button onClick={() => updateCalc('0')}>0</button>
      <button onClick={calculate}>=</button>
    </div>
  )
}

export default Digits
