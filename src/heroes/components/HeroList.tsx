import { useMemo } from "react"
import { getHeroesByPublisher } from "../helpers"
import { publisher } from "../types"
import { HeroItem } from "./HeroItem"
import './HeroList.css'

type args = {
  publisher: publisher
}

export const HeroList = ({ publisher }: args) => {

  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])

  return (
    <div className="hero__list">
      {
        heroes.map(hero => (
          <HeroItem key={hero.id} hero={hero} />
        ))
      }
    </div>
  )
}
