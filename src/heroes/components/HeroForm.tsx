import { ChangeEvent, FormEvent, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getHeroesByName } from '../helpers/getHeroByName'
import { hero } from '../types'
import './HeroForm.css'

type args = {
  hero: string
  setHero: (value: string) => void
  onHero: (hero: hero[]) => void
}

export const HeroForm = ({ hero, setHero, onHero }: args) => {

  const navigate = useNavigate()

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setHero(e.target.value);
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onHero(getHeroesByName(hero))
    navigate(`?q=${hero}`)
  }

  return (
    <form className="search__form" onSubmit={onSubmit}>
      <input
        value={hero}
        onChange={onChange}
        placeholder="search a hero"
        type="text"
        className="search__input" />
    </form>
  )
}
