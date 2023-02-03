import "./Login.css"
import { Card, CardHeader, CardBody, CardFooter, Stack, Box, Text, Heading, Input, Button, Link } from '@chakra-ui/react'

const Login = (props) => {

    const onLogInClick = () => {
        props.onLogin({
            user: 'flor',
            apiKey: '',
        })
    }
return <div class="login">
    <Card class='card'>
        <CardHeader class="heading"><Heading>Log in</Heading></CardHeader>
        <CardBody>
            <Stack>
                <br/>
                <Input type="text" placeholder="username"/>
                <br/>
                <Input type="password" placeholder="password"/>
                <br/>
                <Text>Not Registered? <Link color='teal.500'>Register</Link></Text>
                <br/>
                <Button onClick={onLogInClick}>Submit</Button>
            </Stack>
        </CardBody>
    </Card>
</div>
}

export default Login;