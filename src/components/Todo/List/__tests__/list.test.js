import React from 'react'
import { cleanup, fireEvent, render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

import List from '../ListItems'


afterEach(cleanup)

const mockUpdate = jest.fn()
const mockDelete = jest.fn()
const mockData = [{
    text:'doctor meeting',
    key:' 1629463518731'
}]



describe('<ListItems>',() => {
    it('should edit the the input value',() => {
        const { queryByLabelText } = render(
            < List
                items={mockData}
                setUpdate={mockUpdate}
                deleteItem={mockDelete}
            />
        )
        fireEvent.change(queryByLabelText('edit'),{target:{value:'parents meeting'}})
        expect(mockUpdate).toBeCalled()
    })

    it('should delete the value',() => {
        const { queryByTestId } = render(
            <List
                items={mockData}
                setUpdate={mockUpdate}
                deleteItem={mockDelete}
            />
        )
        fireEvent.click(queryByTestId('delete'))
        expect(queryByTestId('edit')).toHaveValue('')
    })
})