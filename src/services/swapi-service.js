export default class SwapiService {
  #apiBase = "https://swapi.dev/api";
  #imageApi = "https://starwars-visualguide.com/assets/img";

  getResource = async (url) => {
    const res = await fetch(`${this.#apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, recieved ${res.status}`);
    }

    return res.json();
  };

  getAllPeople = async () => {
    const data = await this.getResource("/people/");

    return data.results.map(this.#transformPerson);
  };

  getPerson = async (id) => {
    const person = await this.getResource(`/people/${id}/`);
    return this.#transformPerson(person);
  };

  getPersonImage = ({ id }) => {
    return `${this.#imageApi}/characters/${id}.jpg`;
  };

  getAllPlanets = async () => {
    const res = await this.getResource(`/planets/`);
    return res.results.map(this.#transformPlanet);
  };

  getPlanet = async (id) => {
    const planet = await this.getResource(`/planets/${id}/`);
    return this.#transformPlanet(planet);
  };

  getPlanetImage = ({ id }) => {
    return `${this.#imageApi}/planets/${id}.jpg`;
  };

  getAllStarships = async () => {
    const res = await this.getResource(`/starships/`);
    return res.results.map(this.#transformStarship);
  };

  getStarship = async (id) => {
    const starship = await this.getResource(`/starships/${id}/`);
    return this.#transformStarship(starship);
  };

  getStarshipImage = ({ id }) => {
    return `${this.#imageApi}/starships/${id}.jpg`;
  };

  #transformPerson = (person) => {
    return {
      id: this.#cutId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
    };
  };

  #transformPlanet = (planet) => {
    return {
      id: this.#cutId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
    };
  };

  #transformStarship = (starship) => {
    return {
      id: this.#cutId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargo_capacity,
    };
  };

  #cutId = (item) => {
    return item.url.match(/\d+/)[0];
  };
}
