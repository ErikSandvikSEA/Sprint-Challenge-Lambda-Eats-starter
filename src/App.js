import React, { useState } from "react";
import { Route, Switch, Link } from 'react-router-dom'
import YourOrder from './components/YourOrder'
import OrderForm from './components/OrderForm'
import * as yup from 'yup'


const initialFormValues = {
  name: '',
  size: 'selectSize',
  toppings: {
    pepperoni: false,
    mushroom: false,
    blackOlive: false,
    pineapple: false,
  },
  specialInstructions: '',
}

const initialFormErrors = {
  name: '',
}

const formSchema = yup.object().shape({
  name: yup
    .string()
    .required()
    .min(3, 'Name must have at least 3 characters'),
})







const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)



  const onInputChange = evt => {
    const inputName = evt.target.name
    const inputValue = evt.target.value

    yup
      .reach(formSchema, inputName)
      .validate(inputValue)
      .then(valid => {
        //clear errors
        setFormErrors({
          ...formErrors,
          [inputName]: '',
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [inputName]: err.errors[0]
        })
      })

    setFormValues({
      ...formValues,
      [inputName]: inputValue
    })
  }

  const onCheckboxChange = evt => {
    const { name } = evt.target
    const isChecked = evt.target.checked

    setFormValues({
      ...formValues,
      toppings: {
        ...formValues.hobbies,
        [name]: isChecked,
      }
    })
  }




  return (
    <>
      <header>
        <h1>Gourmet Slices</h1>
        <Route path='/'>
          <Link to='/'>Home</Link>
        </Route>
      </header>

      <Link to='/pizza'>Start Building Your Pizza</Link>


    <Switch>
      <Route path='/pizza/your-order'>
        <YourOrder />
      </Route>


      <Route path='/pizza'>
        <OrderForm
          values={formValues}
          onInputChange={onInputChange}
          onCheckboxChange={onCheckboxChange}
          errors={formErrors}
         
         />
      </Route>
    </Switch>

    </>
  );
};
export default App;
