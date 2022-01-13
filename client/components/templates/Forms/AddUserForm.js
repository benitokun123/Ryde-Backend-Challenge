import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, SubmitButton, ResetButton } from 'formik-semantic-ui-react';
import { Grid, Container} from 'semantic-ui-react';
import { FormField, FormSelectCountry, FormTextArea } from 'components/modules/FormElements';
import axios from 'axios';

const values = {
  name: '',
  username: '',
  dob: null,
  address1: '',
  address2: '',
  country: '',
  postalCode: '',
  description: ''
}

const validation = Yup.object(
  {
    name: Yup.string().required('Required'),
    username: Yup.string().required('Required'),
    dob: Yup.date().required('Required'),
    address1: Yup.string().required('Required'),
    country: Yup.string().required('Required'),
    postalCode: Yup.string().required('Required')
  }
)

const handleSubmit = async (values, { setSubmitting, setStatus }) => {
    values.address = {
        "address1": values.address1, 
        "address2": values.address2, 
        "country": values.country, 
        "postalCode": values.postalCode
    }
    await axios.post('http://localhost:3000/api/user', values)
        .then(res => res.data)
        .then(res => {
            setStatus("Success");
        })
        .catch(err => {
            console.log(err);
            setStatus("This username already exists in the database.");
        })
    setSubmitting(false);
}

export default function AddUserForm() {
  return (
    <Formik
      initialValues={values}
      validationSchema={validation}
      onSubmit={handleSubmit}
    >
        { ({ status }) => (
        <Form>
            <Grid columns={2} stackable relaxed container>
            <Grid.Row columns={2}>
                <FormField name="name" text="Full Name"/>
                <FormField name="username" text="User Name"/>
            </Grid.Row>
            <Grid.Row columns={2}>
                <FormField name="dob" text="Date of Birth" type="date"/>
                <FormField name="address1" text="Address 1"/>
            </Grid.Row>
            <Grid.Row columns={2}>
                <FormField name="address2" text="Address 2"/>
                <FormSelectCountry name="country" text="Country"/>
            </Grid.Row>
            <Grid.Row columns={2}>
                <FormField name="postalCode" text="Postal Code"/>
            </Grid.Row>
            <Grid.Row columns={1}>
                <FormTextArea name="description" text="Description"/>
            </Grid.Row>
            </Grid>

            <Grid centered columns={2}>
            <SubmitButton content="Confirm"/>
            <ResetButton content="Clear"/>
            </Grid>
            
            {status=="Success"?
                <Container textAlign="center" content="User added" style={{color: "green"}}/>
                :
                <Container textAlign="center" content={status} style={{color: "red"}}/>
            }
        </Form>
        )}
    </Formik>
  )
}