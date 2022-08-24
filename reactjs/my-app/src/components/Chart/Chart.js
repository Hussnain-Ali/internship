import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css'
function Chart(props) {
    const { datapoint } = props;
    const dataPointValue = datapoint.map(datapoint => datapoint.value)
    const totalMaximun = Math.max(...dataPointValue)
    console.log(totalMaximun)
    return (
        <div className='chart'>
            {
                datapoint.map((dtpoint, id) => {
                    <ChartBar
                        key={id}
                        value={dtpoint.value}
                        maxValue={totalMaximun}
                        label={dtpoint.label} />
                })
            }
        </div>
    );
}

export default Chart;