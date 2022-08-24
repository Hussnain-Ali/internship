import React from 'react';

function ChartBar(props) {
    const { label, maxValue, value } = props;
    console.log(label)
    let chartHeigth = '0%';
    if (props.max > 0) {
        chartHeigth = Math.round((value / maxValue) * 100) + '%'
    }
    return (
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
                <div className='chart-bar__fill'
                    style={{ height: chartHeigth }}>

                </div>
            </div>
            <div className='chart-bar__label'>{label}</div>
        </div>
    );
}

export default ChartBar;