import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ErrorBoundry from "../error-boundry";
import Row from "../row";
import { PlanetDeteils, PlanetList } from "../sw-components";

const PlanetePage = () => {
  let navigate = useNavigate();

  const [selectedPerson, onSelectPerson] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    if (selectedPerson) {
      navigate(`/planets/${selectedPerson}`)
    }
  }, [selectedPerson]);

  return (
    <ErrorBoundry>
      <Row right={<PlanetDeteils itemId={id} />}
        left={<PlanetList onSelectPerson={(id)=> {
          onSelectPerson(id)
        } } />}
      />
    </ErrorBoundry>
  )
}

export default PlanetePage;