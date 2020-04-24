import React, { useState, useEffect } from 'react'
import { useParams, useHistory, useRouteMatch, Route, Link } from 'react-router-dom' // hook


const OrderForm = (props) => {
     const {
          values,
          onInputChange,
          onCheckboxChange,
          errors
     } = props
     return (
          <div>
               <h1>
                    Build Your Order
               </h1>

               <form>
                    <div className='errors'>
                         <h3
                              data-cyName='nameErrorInput'
                              value={errors.name}>{errors.name}</h3>

                         <h3
                              data-cyName='emailErrorInput'
                              value={errors.email}>{errors.email}</h3>

                         <h3
                              data-cyName='passwordErrorInput'
                         >{errors.password}</h3>

                         <h3>{errors.termsOfService}</h3>

                    </div>

                    <label>Enter Name:&nbsp;
                    <input
                              value={values.name}
                              onChange={onInputChange}
                              name='name'
                              type='text'
                         />
                    </label>
                    <label>&nbsp;Size:&nbsp;
       <select
                              // very similar to inputs of type text
                              value={values.size}
                              onChange={onInputChange}
                              name='size'
                         >
                              <option value='selectSize'>Select Size</option>
                              <option value='small'>Small</option>
                              <option value='medium'>Medium</option>
                              <option value='large'>Large</option>
                         </select></label>

                    <label><input
                         checked={values.toppings.pepperoni}
                         onChange={onCheckboxChange}
                         name='pepperoni'
                         type="checkbox" /> Pepperoni</label>
                    <label><input
                         checked={values.toppings.mushroom}
                         onChange={onCheckboxChange}
                         name='mushroom'
                         type="checkbox" /> Mushroom</label>
                    <label><input
                         checked={values.toppings.blackOlive}
                         onChange={onCheckboxChange}
                         name='blackOlive'
                         type="checkbox" /> Black Olive</label>
                    <label><input
                         checked={values.toppings.pineapple}
                         onChange={onCheckboxChange}
                         name='pineapple'
                         type='checkbox' /> Pineapple
        </label>

                    <label>&nbsp;Special Instructions:&nbsp;
                    <input
                              value={values.specialInstructions}
                              onChange={onInputChange}
                              name='specialInstructions'
                              type='text'
                         />
                    </label>
               </form>
          </div>
     )
}

export default OrderForm