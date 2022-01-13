import axios from "axios";
import { Container, Header } from "semantic-ui-react";
import GoBackButton from "components/modules/Buttons/GoBackButton";
import EditUserForm from "components/templates/Forms/EditUserForm";

export async function getServerSideProps(context) {
    const { data: UserDetails } = await axios.get('http://localhost:3000/api/user/' + context.params.id)
  
    return {
        props: {
            user: UserDetails
        }
    }
}

export default function EditUser({ user }) {
    return (
        <Container>
            <GoBackButton/>
            <Header content="Edit User" textAlign="center" style={{fontSize: "2rem"}}/>
            <br/><br/>
            <EditUserForm user={user} />
        </Container>
    )
}