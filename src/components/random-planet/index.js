import React, { Component } from "react";
import SwapiService from "../../services";
import ErrorIndicator from "../error-indicator";
import Spinner from "../spinner";

import classes from "./random-planet.module.css";

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false,
  };

  componentDidMount() {
    // console.log("Mounted");
    this.updatePlanet();

    this.interval = setInterval(this.updatePlanet, 4000);
  }

  componentWillUnmount() {
    // console.log("Unmounted");

    clearInterval(this.interval);
  }

  planetUpload = (planet) => {
    this.setState({ planet, loading: false });
  };

  onError = (err) => {
    this.setState({
      error: true,
      loading: false,
    });
  };

  updatePlanet = () => {
    // console.log("render");
    // console.log("Updated");
    const id = Math.floor(Math.random() * 25) + 3;

    this.swapiService.getPlanet(id).then(this.planetUpload).catch(this.onError);
  };

  render() {
    const { loading, planet, error } = this.state;

    const hasData = !(loading || error);
    const errorIndicate = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <PlanetView planet={planet} /> : null;

    return (
      <div className={classes.random_planet + " jumbotron rounded"}>
        {errorIndicate}
        {spinner}
        {content}
      </div>
    );
  }
}

const PlanetView = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet;
  return (
    <>
      <img
        className={classes.planet_image}
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        alt="ramdom-planet"
      />

      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population: </span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period: </span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter: </span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </>
  );
};
