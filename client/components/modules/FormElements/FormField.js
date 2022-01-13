import { Input } from 'formik-semantic-ui-react';
import { Grid } from 'semantic-ui-react';

export default function FormField({name, text, type}) {
  return (
    <Grid.Column>
      <label htmlFor={name}>{text}</label>
      <Input name={name} errorPrompt type={type}/>
    </Grid.Column>
  )
}