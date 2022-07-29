import { WithSwapi } from "../hoc-helpers";
import ItemDetails, { Record } from "../item-details";

const PlanetDeteils = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field="costInCredits" label="Cost in credits" />
            <Record field="diameter" label="Diameter" />
            <Record field="population" label="Population" />
        </ItemDetails>
    );
};

const mapPropsToChild = (swapiService) => {
    return{
        getData: swapiService.getPlanet,
        getImageUrl: swapiService.getPlanetImage
    }
}

export default WithSwapi(PlanetDeteils, mapPropsToChild);