import React from 'react'
import { cleanup, fireEvent, render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

import Todo from '../Todo'

afterEach(cleanup)

describe('<Todo/>',() => {
    it('should change the input value',() => {
        const { queryByPlaceholderText } = render(<Todo />)
        fireEvent.change(queryByPlaceholderText('Enter task'),{target:{value:'doctor meeting'}})
        expect(queryByPlaceholderText('Enter task')).toHaveValue('doctor meeting')
    })
})