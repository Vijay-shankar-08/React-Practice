import React from 'react'
import { fireEvent, render, cleanup, waitFor } from "@testing-library/react"
import { act } from 'react-dom/test-utils'
import "@testing-library/jest-dom/extend-expect"

import Form from '../index'

afterEach(cleanup);

const mockData = {
    email:'vijay@gmail.com',
    name:'vijay',
    age:'23',
    degree:'B.E',
    degreeCompleted:['Yes'],
    description:'abcdefgh',
    gender:'Male'
}

describe('MyForm',() => {
    describe('should render the initialView', () => {
        it('should render the email fields', () => {
            const { getByPlaceholderText } = render(<Form />)
            expect(getByPlaceholderText('Enter Email')).toBeInTheDocument()
        })

        it('should render the name fields', () => {
            const { getByPlaceholderText } = render(<Form />)
            expect(getByPlaceholderText('Enter Name')).toBeInTheDocument()
        })

        it('should render the age fields', () => {
            const { getByPlaceholderText } = render(<Form />)
            expect(getByPlaceholderText('Enter Age')).toBeInTheDocument()
        })

        it('should render the radio buttons', () => {
            const { getByLabelText } = render(<Form />)
            expect(getByLabelText('Male')).toBeInTheDocument()
        })

        it('should render the select dropdown', () => {
            const { getByLabelText } = render(<Form />)
            expect(getByLabelText('degree')).toBeInTheDocument()
        })

        it('should render the text area field', () => {
            const { getByPlaceholderText } = render(<Form />)
            expect(getByPlaceholderText('Description')).toBeInTheDocument()
        })

        it('should render the checkbox', () => {
            const { getByLabelText } = render(<Form />)
            expect(getByLabelText('yes')).toBeInTheDocument()
        })
        it('should render the submit button',() => {
            const { getByLabelText } = render(<Form />)
            expect(getByLabelText('submit')).toBeInTheDocument()
        })
    })

    describe('should accept accept the return value',() => {
        it('should change value in email', () => {
            const { getByPlaceholderText } = render(<Form />)
            const element = getByPlaceholderText('Enter Email')
            fireEvent.change(element,{target:{value:'vijay@gmail.com'}})
            expect(element).toHaveValue('vijay@gmail.com')
        })

        it('should change value in name', () => {
            const { getByPlaceholderText } = render(<Form />)
            const element = getByPlaceholderText('Enter Name')
            fireEvent.change(element,{target:{value:'vijay'}})
            expect(element).toHaveValue('vijay')
        })

        it('should change value in age', () => {
            const { getByPlaceholderText } = render(<Form />)
            const element = getByPlaceholderText('Enter Age')
            fireEvent.change(element,{target:{value:'23'}})
            expect(element).toHaveValue('23')
        })

        it('should checked as per selection', () => {
            const { getByLabelText } = render(<Form />)
            const elementOne = getByLabelText('Male')
            const elementTwo = getByLabelText('Female')
            fireEvent.click(elementOne)
            expect(elementOne).toBeChecked()
            fireEvent.click(elementTwo)
            expect(elementTwo).toBeChecked()
        })

        it('should have value in field', () => {
            const { getByPlaceholderText } = render(<Form />)
            const element = getByPlaceholderText('Description')
            fireEvent.change(element,{target:{value:'abcdefgh'}})
            expect(element).toHaveValue('abcdefgh')
        })

        it('should checked as per user selection', () => {
            const { getByLabelText } = render(<Form />)
            const elementOne = getByLabelText('yes')
            const elementTwo = getByLabelText('no')
            fireEvent.click(elementOne)
            expect(elementOne).toBeChecked()
            fireEvent.click(elementTwo)
            expect(elementTwo).toBeChecked()
        })


        it('should select the degree', () => {
            const { getByLabelText } = render(<Form />)
            const element = getByLabelText('degree')
            fireEvent.change(element,{target:{value:'B.E'}})
            expect(element).toHaveValue('B.E')
        })
    })

    describe('submit', () => {
        it('should call onSubmit', async() => {
            const { getByLabelText, getByPlaceholderText } = render(<Form />)
            const element = getByLabelText('my-form')
            fireEvent.change(getByPlaceholderText('Enter Email'),{target:{value:'vijay@gmail.com'}})
            fireEvent.change(getByPlaceholderText('Enter Name'),{target:{value:'vijay'}})
            fireEvent.change(getByPlaceholderText('Enter Age'),{target:{value:23}})
            fireEvent.click(getByLabelText('Male'))
            fireEvent.change(getByLabelText('degree'),{target:{value:'B.E'}})
            fireEvent.change(getByPlaceholderText('Description'),{target:{value:'abcdefgh'}})
            fireEvent.click(getByLabelText('yes'))
    
           
            fireEvent.submit(element)
            
            await waitFor(() => {
            expect(element).toHaveFormValues(mockData)
        })
            
        })
    })
    describe('reset',() => {
        it('should reset the values',async() => {
            const { getByLabelText, getByPlaceholderText } = render(<Form />)
            fireEvent.change(getByPlaceholderText('Enter Email'),{target:{value:'vijay@gmail.com'}})
            fireEvent.change(getByPlaceholderText('Enter Name'),{target:{value:'vijay'}})
            fireEvent.change(getByPlaceholderText('Enter Age'),{target:{value:23}})
            fireEvent.click(getByLabelText('Male'))
            fireEvent.change(getByLabelText('degree'),{target:{value:'B.E'}})
            fireEvent.change(getByPlaceholderText('Description'),{target:{value:'abcdefgh'}})
            fireEvent.click(getByLabelText('reset'))
            await waitFor(() =>{
                expect(getByPlaceholderText('Enter Email')).not.toHaveValue('vijay@gmail.com')

                expect(getByPlaceholderText('Enter Name')).not.toHaveValue('vijay')
    
                expect(getByLabelText('Male')).not.toBeChecked()
    
                expect(getByPlaceholderText('Enter Age')).not.toHaveValue(23)
    
                expect(getByLabelText('degree')).not.toHaveValue('B.E')
    
                expect(getByPlaceholderText('Description')).not.toHaveValue('abcdefgh')
            })
        })
    })
})