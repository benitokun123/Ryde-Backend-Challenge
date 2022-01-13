import { Table } from "semantic-ui-react";
import EditButton from 'components/modules/Buttons/EditButton';
import DeleteButton from "components/modules/Buttons/DeleteButton";
import dateFormat from "dateformat";

export default function UserTable({ users }) {
  const tableRows = users.map(
    user => (
      <Table.Row key={user._id}>
        <Table.Cell>
          {user.name}
        </Table.Cell>
        <Table.Cell>
          {user.username}
        </Table.Cell>
        <Table.Cell>
          {dateFormat(user.dob, "d mmm yyyy")}
        </Table.Cell>
        <Table.Cell>
          {Object.values(user.address).join(" ")}
        </Table.Cell>
        <Table.Cell>
          {user.description}
        </Table.Cell>
        <Table.Cell>
          <EditButton link={"/edit-user/" + user._id} />
          &nbsp;
          <DeleteButton link={"http://localhost:3000/api/user/" + user._id} name={user.username}/>
        </Table.Cell>
      </Table.Row>
    )
  )
  
  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell width={3}>Full Name</Table.HeaderCell>
          <Table.HeaderCell width={3}>User Name</Table.HeaderCell>
          <Table.HeaderCell width={2}>Date of Birth</Table.HeaderCell>
          <Table.HeaderCell width={3}>Address</Table.HeaderCell>
          <Table.HeaderCell width={3}>Description</Table.HeaderCell>
          <Table.HeaderCell width={3}/>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {tableRows}
      </Table.Body>
    </Table>
  )
}