import "./Registry.css"
import { getDeptos } from "../../services/dwallet";
import { Card, CardHeader, CardBody, CardFooter, Stack, Box, Text, Heading, Input, Button, Link, Select } from '@chakra-ui/react'

const getDeptos = async () => {
    return await getDeptos();
}
const Registry = () => {
return <div class="register">
    <Card class='card'>
        <CardHeader class="heading"><Heading>Register</Heading></CardHeader>
        <CardBody>
            <Stack>
                <br/>
                <Input type="text" placeholder="Username"/>
                <br/>
                <Input type="password" placeholder="Enter password"/>
                <br/>
                <Input type="password" placeholder="Re-enter password"/>
                <br/>
                <Select placeholder="Select depto"></Select>
                <br/>
                <Select placeholder="Select ciudad"></Select>
                <br/>
                <Text>Already registered? <Link color='teal.500'>Log In</Link></Text>
                <br/>
                <Button type="submit" >Submit</Button>
            </Stack>
        </CardBody>
    </Card>
</div>
}

export default Registry;