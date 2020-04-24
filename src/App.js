import React, { useState } from "react";
import { Route, Switch, Link } from 'react-router-dom'
import YourOrder from './components/YourOrder'
import OrderForm from './components/OrderForm'

const initialFormValues = {
  name: '',
  size: 'Select Size',
  toppings: {
    pepperoni: false,
    mushroom: false,
    blackOlive: false,
    pineapple: false,
  },
  specialInstructions: '',
}









const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues)



  const onInputChange = evt => {
    const inputName = evt.target.name
    const inputValue = evt.target.value

    setFormValues({
      ...formValues,
      [inputName]: inputValue
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
         
         />
      </Route>
    </Switch>

    </>
  );
};
export default App;
