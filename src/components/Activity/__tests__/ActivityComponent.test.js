import React from 'react'
import { cleanup, fireEvent, render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

import ActivityComponent from '../ActivityComponentNext'

afterEach(cleanup)

const mockUserDetails = {
    list:[
        {
            name:"Vijayashankar",
            userId:1,
            activity:["painting","playing"]
        },
        {
            name:"Santhosh",
            userId:2,
            activity:["writting","singing"]
        }
    ]
}

const mockData = {
    list:[
        {
            activity:"painting",
            id:1,
            label:"Painting"
        },
        {
            activity:"singing",
            id:2,
            label:"Singing"
        },
        {
            activity:"writting",
            id:3,
            label:"Writting"
        },
        {
            activity:"playing",
            id:4,
            label:"Playing"
        },
        {
            activity:"reading",
            id:5,
            label:"Reading"
        }
    ]
}

describe('<ActivityComponent />',() => {
    it('should render the details',() => {
        const { getByLabelText } = render(<ActivityComponent userDetailsList={mockUserDetails.list} activityList={mockData.list}/>)
        mockUserDetails.list.map(item => {
            expect(getByLabelText(item.name)).toBeInTheDocument()
        })
        mockData.list.map(item => {
            expect(getByLabelText(item.activity)).toBeInTheDocument()
            expect(getByLabelText(item.activity)).not.toBeChecked()
        })
    })

    it('should check the acivity properly',() => {
        const { getByLabelText } = render(<ActivityComponent userDetailsList={mockUserDetails.list} activityList={mockData.list}/>)
        const elementOne = getByLabelText('Vijayashankar')
        const elementTwo = getByLabelText('Santhosh')
        fireEvent.click(elementOne)
        expect(getByLabelText('painting')).toBeChecked()
        expect(getByLabelText('playing')).toBeChecked()
        fireEvent.click(elementTwo)
        expect(getByLabelText('writting')).toBeChecked()
        expect(getByLabelText('singing')).toBeChecked()
    })
})