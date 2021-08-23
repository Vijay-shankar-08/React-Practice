import React from 'react'
import { fireEvent, render, waitFor,act, cleanup } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

import TestForm from '../index'

describe('<TestForm />',() => {
  it('should call onSubmit',async() => {
    const mockSubmit = jest.fn()
    const { getByLabelText } = render(<TestForm onSubmit={mockSubmit}/>)
    fireEvent.change(getByLabelText('userName',{target: {value:'vijay'}}))
    await act(async() => fireEvent.submit(getByLabelText('submit')))
    expect(mockSubmit).toHaveBeenCalled()
  })
})