import { getHeroesByPublisher } from "../helpers"
import { publisher } from "../types"
import { HeroItem } from "./HeroItem"
import './HeroList.css'

type args = {
  publisher: publisher
}

export const HeroList = ({ publisher }: args) => {
  return (
    <div className="hero__list">
      {
        getHeroesByPublisher(publisher).map(hero => (
          <HeroItem key={hero.id} hero={hero} />
        ))
      }
    </div>
  )
}
