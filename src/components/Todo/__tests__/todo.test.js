import React from 'react'
import { cleanup, fireEvent, render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

import Todo from '../Todo'

afterEach(cleanup)

describe('<Todo/>',() => {
    it('should change the input value',() => {
        const { queryByPlaceholderText, getByLabelText, debug } = render(<Todo />)
        console.log(<Todo />)
        fireEvent.change(queryByPlaceholderText('Enter task'),{target:{value:'doctor meeting'}})
        expect(queryByPlaceholderText('Enter task')).toHaveValue('doctor meeting')
        fireEvent.submit(getByLabelText('todo-form'))
        expect(getByLabelText('edit')).toHaveValue('doctor meeting')
        fireEvent.change(queryByPlaceholderText('Enter task'),{target:{value:'parents meeting'}})
        fireEvent.submit(getByLabelText('todo-form'))
        debug()
        expect(getByLabelText('edit')).toHaveValue('doctor meeting')
    })
})