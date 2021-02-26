import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Please input a name for your order.')
        .min(2, 'Name must be at least 2 characters long!'),
    size: yup
        .string()
        .trim()
        .required('Please select a size for your pizza.'),
    special: yup
        .string()
        .trim(),
    xcheese: yup
        .boolean(),
    pepperoni: yup
        .boolean(),
    mushrooms: yup
        .boolean(),
    sausage: yup
        .boolean(),
})

export default formSchema