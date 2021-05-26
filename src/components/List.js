import React from 'react'
import Person from './Person'
function List() {
    const items = [
        {
            id: 1,
            name: "vijay",
            description: "React developer"

        },
        {
            id: 2,
            name: "Madhu",
            description: "Angular developer"

        },
        {
            id: 3,
            name: "Deepika",
            description: "Python developer"

        },
        {
            id: 4,
            name: "shabir",
            description: "Angular developer"

        },
        {
            id: 5,
            name: "Athesh",
            description: "React developer"

        }
    ]
    const EmployeeList = items.map((person, index) => <Person key={person.id} persons={person} />)


    return (
        //     <React.Fragment>
        //     {items.map(user => (
        //       <div key={user.index}>
        //         <h2>{user.name}</h2>
        //         <p>{user.description}</p>
        //       </div>
        //     ))}
        //   </React.Fragment>
        <div>
            {EmployeeList}
        </div>
    )
}


export default List