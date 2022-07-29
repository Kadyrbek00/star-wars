import { SwapiConsumer } from "../context";

const WithSwapi = (Wrapp, mapProps) => {
    return (props) => {
        return(
            <SwapiConsumer>
                {(swapiService) => {
                    const serviceProps = mapProps(swapiService)

                    return <Wrapp {...props} {...serviceProps}/>
                }}
            </SwapiConsumer>
        );
    };
};

export default WithSwapi;