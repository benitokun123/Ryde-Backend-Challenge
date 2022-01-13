import GoBackButton from "components/modules/Buttons/GoBackButton"
import AddUserForm from "components/templates/Forms/AddUserForm"
import { Container, Header } from "semantic-ui-react"

export default function AddUser() {
    return (
        <Container>
            <GoBackButton/>
            <Header content="Add User" textAlign="center" style={{fontSize: "2rem"}}/>
            <br/><br/>
            <AddUserForm/>
        </Container>
    )
}