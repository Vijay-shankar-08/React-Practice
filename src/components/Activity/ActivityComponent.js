import React,{ useState } from 'react'
import PropTypes from "prop-types"
import './activity.css'

import data from './userDetails.json'

function ActivityComponent({userDetailsList}) {
    const[currentActivityList,setCurrentActivityList] = useState([''])
    // const[check,setCheck] = useState(false)
    // let currentActivityList =[]
    const activityList = ["painting","playing","singing","writting"]
    function handleClick(id){
       let matchedUserList = userDetailsList.filter(item => {
            if(item.userId === id ){
                return (
                    item.activity
                )
            }
        })
        matchedUserList.map(item =>{
            return(
               setCurrentActivityList(
                    item.activity
               ) 
            )
        })
        
    }

    return (
        <div className = "splitScreen">
            <div className= "topPane">
                <h1>Activities</h1>
                {activityList.map((item,index) =>{
                    return(
                        <label key ={index}>
                            <input type = "radio" 
                            name={item} 
                            value = {item}  
                            // defaultChecked={() => handleCheckbox(item)}
                            checked = {currentActivityList.includes(item)} 
                            />
                            {item}
                            <br />
                        </label>
                    )
                })} 
            </div>
            <div className= "bottomPane ">
                <h1>Users</h1>
                {userDetailsList.map(item =>{
                    return(
                        <div key={item.userIdd}>
                        <button type="button" onClick={() => handleClick(item.userId)}>{item.name}</button><br />
                        </div>
                    )
                    
                })}
                {console.log(currentActivityList)}
            </div>
        </div>
    )
}

ActivityComponent.defaultProps = {
    userDetailsList: data.list

};

ActivityComponent.prototype = {
    userDetailsList: PropTypes.array.isRequired
}

export default ActivityComponent