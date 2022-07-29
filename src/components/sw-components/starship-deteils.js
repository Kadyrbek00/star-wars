import { WithSwapi } from "../hoc-helpers";
import ItemDetails, {Record} from "../item-details";

const StarshipDeteils = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field="costInCredits" label="Cost in credits" />
            <Record field="model" label="Model" />
            <Record field="crew" label="Crew" />
        </ItemDetails>
    );
};

const mapPropsToChild = (swapiService) => {
    return{
        getData: swapiService.getStarship,
        getImageUrl: swapiService.getStarshipImage
    }
}

export default WithSwapi(StarshipDeteils, mapPropsToChild);