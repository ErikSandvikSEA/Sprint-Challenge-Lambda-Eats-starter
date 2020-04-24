import React from "react";
import { Route, Switch, Link } from 'react-router-dom'
import YourOrder from './components/YourOrder'
import OrderForm from './components/OrderForm'

const App = () => {
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
        <OrderForm />
      </Route>
    </Switch>

    </>
  );
};
export default App;
