import { heroes } from "../data";
import { hero } from "../types";

export const getHeroById = (id: string | undefined): hero | undefined => heroes.find(hero => hero.id === id);