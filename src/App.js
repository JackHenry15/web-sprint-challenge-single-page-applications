import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from 'yup';

import { Route, Link, Switch } from 'react-router-dom';

import Home from './Home'
import Form from './Form'
import formSchema from './validation/formSchema'

// initial states
const initialFormValues = {
  //customer info
  name: '',
  special: '',
  //pizza info
    //dropdown
    size: '',
    //checkboxes
    xcheese: false,
    pepperoni: false,
    mushrooms: false,
    sausage: false
}

// initial errors
const initialFormErrors = {
  name: '',
  size: ''
}
// initial order
const initialOrders = []
const initialDisabled = true


export default function App(props) {
  const [orders, setOrders] = useState(initialOrders)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

//helpers

const postNewOrder = newOrder => {
  axios
  .post(`https://reqres.in/api/users`, newOrder)
  .then(res => {
    setOrders([
      ...orders, res.data
    ])
    console.log(orders)
  })
  .catch(err => {
    console.log('error', err);
  })
  setFormValues(initialFormValues);
}

// event handlers 
const inputChange = (name, value) => {
  //validation with yup
  yup.reach(formSchema, name)
    .validate(value)
    .then(() => {
      //good
      setFormErrors({...formErrors, [name]: ''})
    })
    .catch(err => {
      setFormErrors({...formErrors, [name]: err.errors})
    })
    setFormValues({
      ...formValues,
      [name]: value
    })
}

const formSubmit = () => {
  const newOrder = {
    name: formValues.name.trim(),
    special: formValues.special.trim(),
    size: formValues.size.trim(),
    xcheese: [].filter(term => formValues[term]),
    pepperoni: [].filter(term => formValues[term]),
    mushrooms: [].filter(term => formValues[term]),
    sausage: [].filter(term => formValues[term])
  }
  postNewOrder(newOrder)
}

useEffect(() => {
  formSchema.isValid(formValues).then(valid => setDisabled(!valid))
}, [formValues])

  return (
    <div className='App'>
      <h1>Lambda Eats</h1>
      <nav>
        <div className='nav-links'>
          {/* links for home page and form */}
          <Link to='/'>Home</Link>
          <Link to='/pizza'>Form</Link>
        </div>
      </nav>

      {/* switch with route for components */}
      <Switch>
        <Route path="/pizza">
          <Form 
          values={formValues}
          change={inputChange}
          submit={formSubmit}
          disabled={disabled}
          errors={formErrors}
          />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

