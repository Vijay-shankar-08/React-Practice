import React from 'react'

function Person({ persons}) {
    return (
        <React.Fragment >
            <ol>
                {persons.name} =
                {persons.description}
            </ol>
        </React.Fragment>
    )
}

export default Person