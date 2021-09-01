import React from 'react'
import { cleanup, fireEvent, render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

import Story from '../StoryBook.js'
import book from '../mockData.json'
import author from '../authorList.json'


afterEach(cleanup)

const mockBook = book.list
const mockAuthor  = author.list

describe('<Story />',() => {
    it('should render the basic elements',() => {
        const { getByLabelText } = render( <Story book={mockBook} author={mockAuthor} />)
        expect(getByLabelText('select')).toBeInTheDocument()
    })

    it('should select the one value',() => {
        const { getByLabelText, getByText, debug } = render( <Story book={mockBook} author={mockAuthor} />)
        fireEvent.change(getByLabelText('select'),{target:{value:2}})
        expect(getByLabelText('select')).toHaveValue('2')
        const elementOne = getByText('The Girl Nextdoor')
        const elementTwo = getByText('2 States')
        const elementThree = getByText('India Positive')
        debug()
        expect(elementOne).toBeInTheDocument()
        expect(elementTwo).toBeInTheDocument()
        expect(elementThree).toBeInTheDocument()
    })
})