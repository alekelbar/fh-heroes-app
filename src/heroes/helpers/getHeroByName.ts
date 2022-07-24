import { heroes } from "../data";
import { hero } from "../types";


export const getHeroesByName = (name: string): Array<hero> =>
  heroes.filter(({ superhero }: hero) => superhero.toLowerCase().includes(name.toLowerCase()));