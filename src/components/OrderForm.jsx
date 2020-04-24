import React, { useState, useEffect } from 'react'
import { useParams, useHistory, useRouteMatch, Route, Link } from 'react-router-dom' // hook


const OrderForm = (props) => {
     const {
          values,
          onInputChange,
     } = props
     return (
          <div>
               <h1>
                    Build Your Order
               </h1>
          
          <form>
               <label>Enter Name:&nbsp;
                    <input 
                         value={values.name}
                         onChange={onInputChange}
                         name='name'
                         type='text'
                    />
               </label>
               <label>Size:&nbsp;
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
          </form>
          </div>
     )
     }

     export default OrderForm