import { Button } from "@chakra-ui/react";

const Dashboard = (props) => {
    const onLogOutClick = () => {
        props.onLogout(null)
    }
    return (
        <div><h1>Dashboard</h1>
        <Button onClick={onLogOutClick}>LogOut</Button>
        </div>
    )
};

export default Dashboard;