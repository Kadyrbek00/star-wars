import { WithSwapi } from "../hoc-helpers";
import ItemDetails, { Record } from "../item-details";


const PersonDeteils = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field="eyeColor" label="Eye color" />
            <Record field="birthYear" label="Birth year" />
            <Record field="gender" label="Gender" />
        </ItemDetails>
    )
}

const mapPropsToChild = (swapiService) => {
    return{
        getData: swapiService.getPerson,
        getImageUrl: swapiService.getPersonImage
    }
}

export default WithSwapi(PersonDeteils, mapPropsToChild);