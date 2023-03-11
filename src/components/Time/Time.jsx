import React, { useEffect, useState, } from 'react'
import s from './Time.module.scss'
import { CiCoffeeCup, CiLaptop } from 'react-icons/ci';
import { CgGym } from 'react-icons/cg';
import { GiNightSleep } from 'react-icons/gi'
import { FaPlaystation } from 'react-icons/fa'


function Time() {



    const [currentTime, setCurrentTime] = useState('00');

    const updateTime = () => {
        let time = new Date().toLocaleTimeString();
        setCurrentTime(time)
    }

    useEffect(() => {
        setInterval(updateTime, 1000)
    }, [currentTime])

    console.log();

    return (
        <div className={s.time}>
            {(() => {
                switch (currentTime.slice(0,2)) {
                    case '10':
                        return (
                            <div className={s.time_wrapper}>
                            <CiCoffeeCup  className={s.time_img}/>
                            <p className={s.time_do}>I'm currently drink coffe</p>
                            </div>
                            )
                    case '11'|| '12' ||  '13' ||'14' || '15' ||  '16' || '17' || '18':
                        return (
                            <div className={s.time_wrapper}>
                            <CiLaptop  className={s.time_img}/>
                            <p className={s.time_do}>I'm currently working</p>
                            </div>
                            )
                    case '19' || '20':
                        return (
                        <div className={s.time_wrapper}>
                        <CgGym  className={s.time_img}/>
                        <p className={s.time_do}>I'm currently training</p>
                        </div>
                        )
                    case '21' ||  '22' ||'23' :
                        return (
                            <div className={s.time_wrapper}>
                            <FaPlaystation className={s.time_img}/>
                            <p className={s.time_do}>I'm currently gaming</p>
                            </div>
                            )
                    case '00' || '01' ||  '02' ||'03' :
                        return (
                            <div className={s.time_wrapper}>
                            <GiNightSleep className={s.time_img}/>
                            <p className={s.time_do}>I'm currently sleeping</p>
                            </div>
                            )
                    default:
                        return null
                }
            })()}

        </div>
    )
}

export default Time