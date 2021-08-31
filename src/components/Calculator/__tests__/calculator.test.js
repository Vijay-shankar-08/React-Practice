import React from 'react'
import { cleanup, fireEvent, render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

import NextCalculator from '../NextCalculator'

afterEach(cleanup)

describe('<NextCalculator />',() => {
    it('should change the input value', () => {
        const { getByLabelText, getByRole } = render(< NextCalculator />)
        const element = getByLabelText('result')
        const btnElement =  getByRole('button',{name:/5/i})
        fireEvent.click(btnElement)
        expect(element).toHaveValue('5')
    })
    it('should update  the input value when button clicked', () => {
        const { getByLabelText, getByRole } = render(< NextCalculator />)
        const element = getByLabelText('result')
        const btnElement =  getByRole('button',{name:/5/i})
        const btnElementTwo =  getByLabelText('sum')
        const btnElementThree =  getByRole('button',{name:/5/i})
        fireEvent.click(btnElement)
        fireEvent.click(btnElementTwo)
        fireEvent.click(btnElementThree)
        expect(element).toHaveValue('5+5')
    })

    it('should call the calculate function when button click',() => {
        const { getByRole, getByLabelText } = render(<NextCalculator />)
        const element = getByLabelText('result')
        const resultElement = getByRole('button',{name:/result/i})
        const btnElement =  getByRole('button',{name:/5/i})
        const btnElementTwo =  getByLabelText('sum')
        const btnElementThree =  getByRole('button',{name:/5/i})
        fireEvent.click(btnElement)
        fireEvent.click(btnElementTwo)
        fireEvent.click(btnElementThree)
        fireEvent.click(resultElement)
        expect(element).toHaveValue('10')
    })
    it('should have error when input is wrong',() => {
        const { getByRole,  getByLabelText } = render(<NextCalculator />)
        const element = getByLabelText('result')
        const resultElement = getByRole('button',{name:/result/i})
        const btnElement =  getByRole('button',{name:/5/i})
        const btnElementTwo =  getByLabelText('sum')
        const btnElementThree =  getByRole('button',{name:/5/i})
        fireEvent.click(btnElementTwo)
        fireEvent.click(btnElement)
        fireEvent.click(btnElementThree)
        fireEvent.click(resultElement)
        expect(element).toHaveValue('Error')
    })

    it('focus on result input field when render',() => {
        const { getByLabelText } = render(<NextCalculator />)
        const element = getByLabelText('result')
        expect(element).toHaveFocus()
    })

})