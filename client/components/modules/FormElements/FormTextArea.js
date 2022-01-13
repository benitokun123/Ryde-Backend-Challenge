import { TextArea } from 'formik-semantic-ui-react';
import { Grid } from 'semantic-ui-react';

export default function FormTextArea({name, text}) {
  return (
    <Grid.Column>
      <label htmlFor={name}>{text}</label>
      <TextArea name={name} style={{resize: "none"}} errorPrompt/>
    </Grid.Column>
  )
}