import { useParams } from "react-router-dom"
import { HeroItem } from "../components/HeroItem";
import { getHeroById } from "../helpers/getHeroById";

export const HeroPage = () => {
  const { id } = useParams();
  const hero = getHeroById(id);
  const publisher = hero?.publisher.includes('DC') ? '/dc' : '/marvel'

  return (
    <HeroItem hero={hero} maxsize={true} publisher={publisher} />
  )
}
