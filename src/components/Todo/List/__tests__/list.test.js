import React from 'react'
import { cleanup, fireEvent, render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

import List from '../ListItems'


afterEach(cleanup)

const mockUpdate = jest.fn()
const mockDelete = jest.fn()
const mockData = [
    {
        text:'doctor meeting',
        key:' 1629463518731'
    }
]



describe('<ListItems>',() => {
    it('should edit the the input value',() => {
        const { queryByLabelText, debug } = render(
            < List
                items={mockData}
                setUpdate={mockUpdate}
                deleteItem={mockDelete}
            />
        )
        debug()
        fireEvent.change(queryByLabelText('edit'),{target:{value:'parents meeting'}})
        expect(mockUpdate).toBeCalledWith('parents meeting', ' 1629463518731')
        expect( queryByLabelText('edit')).toHaveValue('parents meeting')
    })

    it('should delete the value',() => {
        const { queryByRole, queryByLabelText } = render(
            <List
                items={mockData}
                setUpdate={mockUpdate}
                deleteItem={mockDelete}
            />
        )
        fireEvent.click(queryByRole('button',{name:/delete/i}))
        expect(mockDelete).toBeCalledWith(' 1629463518731')
        expect(queryByLabelText('edit')).not.toHaveValue('parents meeting')

    })
})