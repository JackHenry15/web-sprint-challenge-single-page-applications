describe('Pizza App', () => {
    beforeEach(() => {
        cy.visit(`http://localhost:3000/pizza`)
    })

const nameInput = () => cy.get('input[name=name]')
const sizeInput = () => cy.get('select')
const xcheeseInput = () => cy.get('input[name=xcheese]')
const pepInput = () => cy.get('input[name=pepperoni]')
const mushInput = () => cy.get('input[name=mushrooms]')
const sausageInput = () => cy.get('input[name=sausage]')
const specialInput = () => cy.get('input[name=special]')
const orderButton = () => cy.get('button')

    describe('can add text to boxes', () => {
        it('type in name input', () => {
            nameInput()
            .should('have.value', '')
            .type('Jeff')
            .should('have.value', 'Jeff')
        })
        it('select a size for', () => {
            sizeInput()
            .should('have.value', '')
            .select('small').should('have.value', 'small')
            .select('medium').should('have.value', 'medium')
            .select('large').should('have.value', 'large')
            .select('xlarge').should('have.value', 'xlarge')
        })
        it('type name in special input', () => {
            specialInput()
            .should('have.value', '')
            .type('This is a special instruction')
            .should('have.value', 'This is a special instruction')
        })
    })
    describe('can select multiple toppings', () => {
        it('can check xcheese', () =>{
            xcheeseInput()
            .should('exist')
            .check()
        })
        it('can check pepperoni', () =>{
            pepInput()
            .should('exist')
            .check()
        })
        it('can check mushrooms', () =>{
            mushInput()
            .should('exist')
            .check()
        })
        it('can check sausage', () =>{
            sausageInput()
            .should('exist')
            .check()
        })
    })
    describe('can submit the form', () => {
        it('can user submit form data', () =>{
            nameInput().type('Customer Name')
            sizeInput().select('medium')
            xcheeseInput().check()
            mushInput().check()
            specialInput().type('Default special instruction')
            orderButton().click()
        })
    })

})