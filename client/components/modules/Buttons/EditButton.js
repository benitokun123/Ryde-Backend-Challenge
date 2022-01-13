import { Button, Icon } from 'semantic-ui-react';
import Link from 'next/link';

export default function EditButton({ link }) {
  return (
    <Link href={link}>
      <Button icon inverted style={{border: "none", color: "black"}}>
        <Icon name="edit" size="large"/>
      </Button>
    </Link>  
  )
}