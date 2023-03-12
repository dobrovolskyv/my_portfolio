import React, { useEffect, useState, } from 'react'
import s from './Time.module.scss'
import { CiCoffeeCup, CiLaptop } from 'react-icons/ci';
import { CgGym } from 'react-icons/cg';
import { GiNightSleep } from 'react-icons/gi'
import { FaPlaystation } from 'react-icons/fa'


function Time() {



    const [currentTime, setCurrentTime] = useState('15');

    const updateTime = () => {
        let time = new Date().toLocaleTimeString();
        setCurrentTime(time)
    }

    useEffect(() => {
        setInterval(updateTime, 1000)
    }, [currentTime])

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
                    case '11':
                    case '12':
                    case '13':
                    case '14':
                    case '15':
                    case '16':
                    case '17':
                    case '18':
                        return (
                            <div className={s.time_wrapper}>
                            <CiLaptop  className={s.time_img}/>
                            <p className={s.time_do}>I'm currently working</p>
                            </div>
                            )
                        case '19':
                        case '20':
                        return (
                        <div className={s.time_wrapper}>
                        <CgGym  className={s.time_img}/>
                        <p className={s.time_do}>I'm currently training</p>
                        </div>
                        )
                    case  '21' :
                    case  '22' :
                    case  '23' :
                        return (
                            <div className={s.time_wrapper}>
                            <FaPlaystation className={s.time_img}/>
                            <p className={s.time_do}>I'm currently gaming</p>
                            </div>
                            )
                    case '00':
                    case '01':
                    case '02':
                    case '03':
                    case '04':
                    case '05':
                    case '06':
                    case '07':
                    case '08':
                    case '09':
                        return (
                            <div className={s.time_wrapper}>
                            <GiNightSleep className={s.time_img}/>
                            <p className={s.time_do}>I'm currently sleeping</p>
                            </div>
                            )
                    default:
                        return (
                            <div className={s.time_wrapper}>
                            <CiLaptop  className={s.time_img}/>
                            <p className={s.time_do}>I'm currently working</p>
                            </div>
                            )
                }
            })()}
        

        </div>
    )
}

export default Time