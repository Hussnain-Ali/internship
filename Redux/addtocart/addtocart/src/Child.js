import React, { useContext } from 'react'
import { Globalinfo } from './App.js'
import SuperChild from './SuperChild.js'
const Child = () => {
    const { appColor } = useContext(Globalinfo)
    return (
        <div>
            <div style={{ color: appColor }}>Child</div>
            <SuperChild />
        </div>
    )
}

export default Child