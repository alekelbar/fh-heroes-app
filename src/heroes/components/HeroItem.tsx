import { Navigate, useNavigate } from "react-router-dom"
import { hero } from "../types"
import './HeroItem.css'

type args = {
  hero: hero | undefined
  maxsize?: boolean
  publisher?: string
}

export const HeroItem = ({ hero, maxsize, publisher }: args) => {

  const navigate = useNavigate()

  if (hero === undefined) return <Navigate to={`${publisher || '/marvel'}`} />

  const onMore = () => {
    navigate(`/hero/${hero.id}`)
  }

  return (
    <div className={`${maxsize ? 'card card--min' : 'card'}`}>
      <div className="card__img-header">
        {hero.superhero}
        <br />
        {hero.publisher}
      </div>
      <figure className={`${maxsize ? 'card__img-container card__img-container--min' : 'card__img-container'}`}>

        <img className={`${maxsize ? 'card__img card__img--min' : 'card__img'}`} src={`/assets/heroes/${hero.id}.jpg`} alt={hero.id} />
      </figure>
      <div className={`card__text`}>
        <p className={`${maxsize ? 'card__paragraph card__paragraph--min' : 'card__paragraph'}`}>
          Firts Appearance: {hero.first_appearance}
          <br />
          character: {hero.characters.split(',')}
        </p>
        <button
          className="card__button"
          onClick={onMore}
        >More...</button>
      </div>
    </div>
  )
}
