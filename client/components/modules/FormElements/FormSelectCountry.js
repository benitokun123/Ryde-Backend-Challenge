import countries from 'country-list';
import FormSelect from 'components/modules/FormElements/FormSelect';

const countryOptions = countries.getNames().sort().map(name => ({key:name,value:name,text:name}))

export default function FormSelectCountry({ name, text }) {
  return (
    <FormSelect name={name} text={text} options={countryOptions} search/>
  )
}