import React, { useState, useCallback, useEffect} from 'react'
import { CiCoffeeCup } from 'react-icons/ci';
import { GiBeard } from 'react-icons/gi'

function Time({ id }) {



    const [currentTime, setCurrentTime] = useState();

    const updateTime = () => {
        let time = new Date().toLocaleTimeString();
        setCurrentTime(time)
    }

    setInterval(updateTime, 1000)
    const time = currentTime


    return (
        <div>
            {(() => {
               
        switch (time) {
            case (time => '0'):
                return "anything"
            case (time => '00'):
                return "MP"
            default:
                return null
        }
      })()}
    <p>{time}</p>
        </div>
    )
}

export default Time