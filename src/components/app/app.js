import { Component } from "react";
import Header from "../header";
import SwapiService from "../../services";
import ErrorIndicator from "../error-indicator";
import ErrorBoundry from "../error-boundry";
import { SwapiProvider } from "../context";
import { PeoplePage, PlanetPage, StarshipPage } from "../pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import RandomPlanet from "../random-planet";
import "./app.css";

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    error: false,
  };

  componentDidCatch() {
    // console.log("Did catch ()");
    this.setState({ error: true });
  }

  render() {
    if (this.state.error) {
      return <ErrorIndicator />;
    }

    return (
      <ErrorBoundry>
        <SwapiProvider value={this.swapiService}>

          <Router>
            <div className="stardb-app">
              <Header />
              <RandomPlanet />

              <Routes>
                <Route path="/" element={<h1>Hello welcome to stardb</h1>}/>
                <Route path="/people">
                  <Route path="" element={<PeoplePage />} />
                  <Route path=":id" element={<PeoplePage />} />
                </Route>
                <Route path="/planets">
                  <Route path="" element={<PlanetPage />} />
                  <Route path=":id" element={<PlanetPage />} />
                </Route>
                <Route path="/starships">
                  <Route path="" element={<StarshipPage />} />
                  <Route path=":id" element={<StarshipPage />} />
                </Route>

              </Routes>

            </div>
          </Router>

        </SwapiProvider>
      </ErrorBoundry>
    );
  }
}