import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { getHeroesByName } from "../helpers/getHeroByName"
import { getParam } from "../helpers/getParam"
import { hero } from "../types"
import { HeroForm } from "./HeroForm"
import { HeroItem } from "./HeroItem"
import './HeroSearch.css'

export const HeroSearch = () => {

  const { search } = useLocation();
  const param = getParam(search);

  const [heroes, setHeroes] = useState<hero[]>([])

  const [input, setInput] = useState({
    hero: param.query
  })

  const onChange = (value: string) => {
    setInput({ ...input, hero: value })
  }

  useEffect(() => {
    setHeroes(getHeroesByName(input.hero));
  }, []);

  const onHeroes = (heroes: hero[]) => {
    setHeroes(heroes);
  }

  return (
    <section className="search">

      <HeroForm hero={input.hero} setHero={onChange} onHero={onHeroes} />

      <section className="search__results">
        <div className="container container--padding">
          {
            heroes.length
              ? heroes.map(e => <HeroItem key={e.id} hero={e} />)
              : <div className="search__alert">No data found</div>
          }
        </div>
      </section>

    </section>
  )
}
