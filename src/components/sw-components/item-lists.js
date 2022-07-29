import {WithSwapi, widthData } from "../hoc-helpers"
import ItemList from "../item-list/item-list";

const witchChildrenFunction = (Wrapped, fn) => {
    return (props) => {
        return <Wrapped {...props}>{fn}</Wrapped>
    }
}

const listWidthChildFunction = witchChildrenFunction(ItemList, ({ name }) => name)

const mapPeopleProps = (swapiService) => {
    return{
        getData: swapiService.getAllPeople,
    };
};

const mapStarshipProps = (swapiService) => {
    return{
        getData: swapiService.getAllStarships,
    };
};

const mapPlanetProps = (swapiService) => {
    return{
        getData: swapiService.getAllPlanets,
    };
};


const PersonList = WithSwapi(widthData(listWidthChildFunction), mapPeopleProps)
const PlanetList = WithSwapi(widthData(listWidthChildFunction), mapPlanetProps)
const StarshipList = WithSwapi(widthData(listWidthChildFunction), mapStarshipProps)

export { PersonList, PlanetList, StarshipList }