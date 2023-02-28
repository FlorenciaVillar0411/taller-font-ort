import { Card, CardBody, CardHeader } from "@chakra-ui/card";
import { Heading } from "@chakra-ui/react";
import './tarjetaMonto.css'

const TarjetaMonto = (props) => {

    

    return <Card className="tarjeta-monto"> 
        <CardHeader><Heading>{props.nombre}</Heading></CardHeader>
        <CardBody>

        $ {props.monto}
        </CardBody>
        </Card>

    
}

export default TarjetaMonto;
