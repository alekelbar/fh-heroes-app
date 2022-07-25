import { useContext } from "react"
import { HeroList } from "../components/HeroList"
import { AuthContext } from "../context/AuthContext"

export const MarvelPage = () => {

  const context = useContext(AuthContext)
  console.log(context)


  return (
    <div>
      <HeroList publisher="Marvel Comics" />
    </div>
  )
}
