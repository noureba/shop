import * as yup from 'yup';

export let InfoSchema = yup.object().shape({
  FirstName: yup.string().required(),
  LastName: yup.string().required(),
  City: yup.string().required(),
  Address: yup.string().required(),
  Telephone: yup.number().required(),
  Email: yup.string().email().required(),
})