import React,{ useState } from 'react'
import PropTypes from "prop-types"
import './activity.css'

import data from './userDetails.json'
import action from './mockData.json'

function ActivityComponentNext({userDetailsList,activityList}) {
    const[currentActivityList,setCurrentActivityList] = useState([''])
    function handleClick(id){
       userDetailsList.filter(item => item.userId === id).map(action =>{
           return(
               setCurrentActivityList(
                   action.activity
               )
           )
       })
     
    }

    return (
        <div className = "splitScreen">
            <div className= "topPane">
                <h1>Activities</h1>
                {activityList.map((item) =>{
                    return(
                        <label key ={item.id}>
                            <input type = "radio" 
                            name={item.activity} 
                            value = {item.activity}  
                            // defaultChecked={() => handleCheckbox(item)}
                            checked = {currentActivityList.includes(item.activity)} 
                            aria-label={item.activity}
                            />
                            {item.label}
                            <br />
                        </label>
                    )
                })} 
            </div>
            <div className= "bottomPane ">
                <h1>Users</h1>
                {userDetailsList.map(item =>{
                    return(
                        <div key={item.userId}>
                        <button type="button" aria-label={item.name} onClick={() => handleClick(item.userId)}>{item.name}</button><br />
                        </div>
                    )
                    
                })}
                {console.log(currentActivityList)}
            </div>
        </div>
    )
}

ActivityComponentNext.defaultProps = {
    userDetailsList: data.list,
    activityList: action.list

};

ActivityComponentNext.prototype = {
    userDetailsList: PropTypes.array.isRequired,
    activityList: PropTypes.array.isRequired
}

export default ActivityComponentNext