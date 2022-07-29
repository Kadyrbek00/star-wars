import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ErrorBoundry from "../error-boundry";
import Row from "../row";
import { PersonDeteils, PersonList } from "../sw-components";

const PeoplePage = () => {
  let navigate = useNavigate();

  const [selectedPerson, onSelectPerson] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    if (selectedPerson) {
      navigate(`/people/${selectedPerson}`)
    }
  }, [selectedPerson]);

  return (
    <ErrorBoundry>
      <Row right={<PersonDeteils itemId={id} />}
        left={<PersonList onSelectPerson={(id)=> {
          onSelectPerson(id)
        } } />}
      />
    </ErrorBoundry>
  )
}

export default PeoplePage;