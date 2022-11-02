import s from './Card.module.scss'

type Props = {
  className: string
  children: React.ReactNode
}

const Card = (props: Props) => {
  return <div className={`${props.className} ${s.card}`}>{props.children}</div>
}

export default Card
