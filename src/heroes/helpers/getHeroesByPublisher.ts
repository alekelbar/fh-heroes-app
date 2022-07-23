import { heroes } from "../data";
import { hero, publisher } from "../types";

export const getHeroesByPublisher = (publisher: publisher): Array<hero> => heroes.filter(hero => hero.publisher === publisher);