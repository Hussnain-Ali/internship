import React, { memo, useMemo } from 'react'

const Demo = (props) => {
    const { listTitle, items } = props
    const sortList = useMemo(() => {
        console.log('changed')
        return items.sort((a, b) => a - b)
    }, [items])
    return (
        <div>
            <h2>{listTitle}</h2>
            <ul>
                {sortList.map((item) => {
                    return <li key={item}>{item}</li>
                })}
            </ul>
        </div>
    )
}

export default memo(Demo)