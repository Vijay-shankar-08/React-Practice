import React from 'react'
import Counter from '../index'
import { fireEvent, render, waitFor, cleanup } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

let getByLabelText;

beforeEach(() => {
    const component = render(<Counter />)
    getByLabelText = component.getByLabelText
})

afterEach(cleanup)

describe("Testing MyCounter", () => {
    it('should header render with correct text',() => {
        // const { getByLabelText } = render(<Counter />)
        const headerElement = getByLabelText('header')
        expect(headerElement.textContent).toBe('My Counter')
    })

    it('should render counter initially zero',() => {
        // const { getByLabelText } = render(<Counter />)
        const counterElement = getByLabelText('counter')
        expect(counterElement.textContent).toBe('0')
    })

    it('render add button with +', () => {
        // const { getByLabelText } = render(<Counter />)
        const addBtn = getByLabelText('add-Btn')
        expect(addBtn.textContent).toBe('+')
    })

    it('should update the input value', () =>{
        // const { getByLabelText } = render(<Counter />)
        const inputElement = getByLabelText('input')
        fireEvent.change(inputElement, { target: { value: '5'}})
        expect(inputElement.value).toBe('5')
    })

    it('should increase the counter value when buttonClick', async () =>{
        // const { getByLabelText } = render(<Counter />)
        const buttonElement = getByLabelText('add-Btn')
        const counterElement = getByLabelText('counter')
        fireEvent.click(buttonElement)
        await waitFor(() => expect(counterElement.textContent).toBe('1'))
    })

    it('should reduce the counter value when buttonClick', () =>{
        // const { getByLabelText } = render(<Counter />)
        const buttonElement = getByLabelText('subtract-Btn')
        const counterElement = getByLabelText('counter')
        fireEvent.click(buttonElement)
        expect(counterElement.textContent).toBe('-1')
    })

    it('should add inputValue to counterValue when add Button Click', async () => {
        // const { getByLabelText } = render(<Counter />)
        const buttonElement = getByLabelText('add-Btn')
        const counterElement = getByLabelText('counter')
        fireEvent.click(buttonElement)
        await waitFor(() => expect(counterElement.textContent).toBe('1'))
    })

    it('should change counter value and it color', async () => {
        // const { getByLabelText } = render(<Counter />)
        const subButtonElement = getByLabelText('subtract-Btn')
        const addButtonElement = getByLabelText('add-Btn')
        const counterElement = getByLabelText('counter')
        const inputElement = getByLabelText('input')

        fireEvent.change(inputElement, {
            target:{ value : 100 }
        })
        fireEvent.click(addButtonElement)
        await waitFor(() => expect(counterElement.className).toBe('green')) 
        fireEvent.click(subButtonElement)
        fireEvent.click(subButtonElement)
        expect(counterElement.className).toBe('red')
    })

    it('should subtract inputValue to counterValue when subtract Button Click', () => {
        // const { getByLabelText } = render(<Counter />)
        const buttonElement = getByLabelText('subtract-Btn')
        const counterElement = getByLabelText('counter')
        fireEvent.click(buttonElement)
        expect(counterElement.textContent).toBe('-1')
    })

    it("should render the favorite color", () => {
         const { getByLabelText ,getAllByText } = render(<Counter />)
         fireEvent.click(getByLabelText("Red"));
         fireEvent.click(getByLabelText("Green"));
         expect(getAllByText("Your favorite color is Green")).toBeTruthy()
       })

})