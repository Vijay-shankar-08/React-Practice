import React from 'react'
import { cleanup, fireEvent, render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"


import Mytask from '../Mytask'

afterEach(cleanup)

describe('<Mytask>',() => {
    it('should render the form',() => {
        const { getByLabelText } = render(<Mytask />)
        const elementOne = getByLabelText('first-name')
        const elementTwo = getByLabelText('last-name')
        const elementThree = getByLabelText('email')
        expect(elementOne).toBeInTheDocument()
        expect(elementTwo).toBeInTheDocument()
        expect(elementThree).toBeInTheDocument()
    })
    it('should change input value',() => {
        const { getByLabelText } = render(<Mytask />)
        const elementOne = getByLabelText('first-name')
        const elementTwo = getByLabelText('last-name')
        const elementThree = getByLabelText('email')
        fireEvent.change(elementOne,{target:{value:'vijay'}})
        fireEvent.change(elementTwo,{target:{value:'shankar'}})
        fireEvent.change(elementThree,{target:{value:'vijay@gmail.com'}})
        expect(elementOne).toHaveValue('vijay')
        expect(elementTwo).toHaveValue('shankar')
        expect(elementThree).toHaveValue('vijay@gmail.com')
        fireEvent.submit(getByLabelText('table-submit'))
        fireEvent.change(elementOne,{target:{value:'vj'}})
        fireEvent.change(elementTwo,{target:{value:'kumar'}})
        fireEvent.change(elementThree,{target:{value:'vj@gmail.com'}})
        fireEvent.submit(getByLabelText('table-submit'))
        expect(elementOne).toHaveValue('')
        expect(elementTwo).toHaveValue('')
        expect(elementThree).toHaveValue('')
    })

    it('should render the table with data', () => {
        const {  getByLabelText, getAllByRole, debug } = render(<Mytask />)
        expect(getByLabelText('table')).toBeInTheDocument()
        expect(getAllByRole('row')[0]).toHaveTextContent('FirstNames')
        expect(getAllByRole('row')[0]).toHaveTextContent('LastName')
        expect(getAllByRole('row')[0]).toHaveTextContent('E-Mail')
        const elementOne = getByLabelText('first-name')
        const elementTwo = getByLabelText('last-name')
        const elementThree = getByLabelText('email')
        fireEvent.change(elementOne,{target:{value:'vijay'}})
        fireEvent.change(elementTwo,{target:{value:'shankar'}})
        fireEvent.change(elementThree,{target:{value:'vijay@gmail.com'}})
        // expect(getByRole('heading',{name:/FirstNames/i})).toBeInTheDocument()
        fireEvent.submit(getByLabelText('table-submit'))
        debug()
        expect(getAllByRole('row')[1]).toHaveTextContent('vijay')
        expect(getAllByRole('row')[1]).toHaveTextContent('shankar')
        expect(getAllByRole('row')[1]).toHaveTextContent('vijay@gmail.com')
        
    })
})