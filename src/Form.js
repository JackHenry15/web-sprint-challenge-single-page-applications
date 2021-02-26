import React from 'react'

export default function Form(props) {
const {values, change, submit, disabled, errors} = props

//on submit
const onSubmit = evt => {
    evt.preventDefault()
    submit()
}
//on change
const onChange = evt => {
    const {name, value, type, checked} = evt.target
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse)
}


    return(
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group-inputs customer'>
                <h1>Pizza Time</h1>
                {/* Text Inputs */}
                <label>Name:&nbsp;
                    <input
                        value={values.name}
                        onChange={onChange}
                        name='name'
                        type='text'
                    />
                </label>
            </div>
            <div className='form-group-inputs pizza'>
                {/* Size Dropdown */}
                <label>Pizza Size:&nbsp;
                    <select
                        value={values.size}
                        onChange={onChange}
                        name='size'
                    >
                        <option value=''>---Select a Pizza Size---</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                        <option value='xlarge'>Extra Large</option>
                    </select>
                </label>
                {/* toppings checkboxes */}
                <div className='form-group-inputs pizza-toppings'>
                    <h4>Toppings</h4>
                    <label>Extra Cheese:&nbsp;
                        <input
                            checked={values.xcheese}
                            onChange={onChange}
                            name='xcheese'
                            type='checkbox'
                        />
                    </label>
                    <label>Pepperoni:&nbsp;
                        <input
                            checked={values.pepperoni}
                            onChange={onChange}
                            name='pepperoni'
                            type='checkbox'
                        />
                    </label>
                    <label>Mushrooms:&nbsp;
                        <input
                            checked={values.mushrooms}
                            onChange={onChange}
                            name='mushrooms'
                            type='checkbox'
                        />
                    </label>
                    <label>Sausage:&nbsp;
                        <input
                            checked={values.sausage}
                            onChange={onChange}
                            name='sausage'
                            type='checkbox'
                        />
                    </label>
                </div>
                <div className='form-group-inputs pizza-special'>
                    <h3>Special Instructions</h3>
                    <label>
                        <input
                            value={values.special}
                            onChange={onChange}
                            name='special'
                            type='text'
                        />
                    </label>
                </div>
            </div>
            <div className='form-group submit'>
                <h2>Order da pizza!</h2>    
                <div className='errors'>
                    {/* rendering validation errors */}
                    <div>{errors.name}</div>
                    <div>{errors.size}</div>
                    <div>{errors.toppings}</div>
                </div>
                <br></br>
                <button disabled={disabled}>Order</button>
            </div>



        </form>
    )
}