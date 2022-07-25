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

  const onBack = () => {
    navigate(-1);
  }

  return (
    <div className={`${maxsize ? 'card card--min' : 'card'}`}>
      {maxsize ? <button className="card__button card__button--back" onClick={onBack}>Go Back</button> : null}
      <div className={`${maxsize ? 'card__img-header card__img-header--min' : 'card__img-header'}`}>
        {hero.superhero}
        <br />
        {hero.publisher}
      </div>
      <figure className={`${maxsize ? 'card__img-container card__img-container--min' : 'card__img-container'}`}>

        <img onClick={onMore} className={`${maxsize ? 'card__img card__img--min' : 'card__img'}`} src={`/assets/heroes/${hero.id}.jpg`} alt={hero.id} />
      </figure>
      <div className={`card__text`}>
        <p className={`${maxsize ? 'card__paragraph card__paragraph--min' : 'card__paragraph'}`}>
          Firts Appearance: {hero.first_appearance}
          <br />
          character: {hero.characters.split(',')}
        </p>
      </div>
    </div>
  )
}
