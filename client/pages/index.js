import { Button, Container, Header } from "semantic-ui-react";
import axios from "axios";
import UserTable from "components/templates/Tables/UserTable";
import { useRouter } from "next/router";

export const getServerSideProps = async () => {
  const { data: usersData } = await axios.get("http://localhost:3000/api/user");
  
  return {
    props: { 
      users: usersData
    }
  };
};

export default function Home({ users }) {
  const router = useRouter();
  return (
    <Container>
      <Header content="Ryde Backend Challenge" textAlign="center" style={{fontSize: "2rem"}}/>
      <br/><br/>
      <Button content="Add User" onClick={() => router.push("/add-user")}/>
      <UserTable users={users}/>
    </Container>
  )
}