import { Button, Icon, Modal, Header } from 'semantic-ui-react';
import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function DeleteButton({ link, name }) {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    return (
        <Modal
            basic
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            size='small'
            trigger={<Button icon inverted style={{border: "none", color: "red"}}>
                <Icon name="delete" size="large"/>
            </Button>}
        >
            <Header>
            Are you sure you want to delete <b style={{color: "red"}}>{name}</b>?
            </Header>
            <Modal.Actions>
                <Button basic color='red' inverted onClick={() => setOpen(false)}>
                    <Icon name='remove' /> No
                </Button>
                <Button color='green' inverted onClick={() => {setOpen(false); axios.delete(link); router.reload()}}>
                    <Icon name='checkmark' /> Yes
                </Button>
            </Modal.Actions>
        </Modal>
    )
}