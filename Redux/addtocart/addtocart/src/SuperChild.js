import React, { useContext } from 'react'
import { Globalinfo } from './App'
const SuperChild = () => {
    const { appColor, getDay } = useContext(Globalinfo)
    const day = 'sunday';
    const handlerDay = () => {
        return getDay(day)
    }
    return (
        <div>
            <div style={{ color: appColor }}>SuperChild</div>
            <button onClick={handlerDay}>Click me</button>
        </div>
    )
}

export default SuperChild