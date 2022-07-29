import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ErrorBoundry from "../error-boundry";
import Row from "../row";
import { StarshipDeteils, StarshipList } from "../sw-components";

const StarshipPage = () => {
  let navigate = useNavigate();

  const [selectedPerson, onSelectPerson] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    if (selectedPerson) {
      navigate(`/starships/${selectedPerson}`)
    }
  }, [selectedPerson]);

  return (
    <ErrorBoundry>
      <Row right={<StarshipDeteils itemId={id} />}
        left={<StarshipList onSelectPerson={(id)=> {
          onSelectPerson(id)
        } } />}
      />
    </ErrorBoundry>
  )
}

export default StarshipPage;