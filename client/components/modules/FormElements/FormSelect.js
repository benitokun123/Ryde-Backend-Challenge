import { Select } from 'formik-semantic-ui-react';
import { Grid } from 'semantic-ui-react';

export default function FormSelect({name, text , options, search, multiple}) {
  return (
    <Grid.Column>
      <label htmlFor={name}>{text}</label>
      <Select name={name} options={options} errorPrompt search={search} multiple={multiple}/>
    </Grid.Column>
  )
}