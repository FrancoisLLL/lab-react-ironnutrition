import React from 'react'

const TodayFood = (props) => {
    return (
        <div>
            <div>{props.quantity} {props.name} - {props.quantity * props.calories} </div>
        </div>
    )
}

export default TodayFood
