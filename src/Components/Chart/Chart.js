import React from 'react'
import ChartBar from './ChartBar'
import './Chart.css'
const Chart = (props) =>{
    let max = null
    if(props.maxValue>0){
        max = props.maxValue
        console.log(max)
    }
    return(
        <div className="chart">
            {
                props.datapoints.map( datapoint => 
                <ChartBar 
                    key = {datapoint.label}
                    value = {datapoint.value}
                    label = {datapoint.label}
                    maxValue = {max}
                ></ChartBar>)
            }
        </div>
    )
}

export default Chart;