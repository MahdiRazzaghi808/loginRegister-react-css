import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import bg from '../../asset/bg.jpg'

// style component
import styles from './SingUp.module.css'


import { validation } from '../validation/validation'


// 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {notify} from "../toastify/toastify"


const SingUp = () => {



    const [focusFlag, setFocusFlag] = useState({
        username: false,
        email: false,
        password: false,
        confirmPassword: false,
        checkbox: false
    })

    const [data, setData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        checkbox: false
    })

    const [touch, setTouch] = useState({
        username: false,
        email: false,
        password: false,
        confirmPassword: false,
        checkbox: false
    })



    const [error, setError] = useState({});


    const changeHandler = event => {
        if (event.target.id === "checkbox") {
            setData({ ...data, [event.target.id]: event.target.checked })
        } else {
            setData({ ...data, [event.target.id]: event.target.value })
        }

    }


    const focusHandler = event => {
        setFocusFlag({ ...focusFlag, [event.target.id]: true })
    }

    const blurHandler = event => {
        setTouch({ ...touch, [event.target.id]: true })
    }


    useEffect(() => {
        setError(validation(data, "signUp"))
    }, [data])




    const SubmitHandler = () => {
        if (!Object.keys(error).length) {
            notify("Registration was successful","success")
        } else {

            setTouch({
                username: true,
                email: true,
                password: true,
                confirmPassword: true,
                checkbox: true
            })

            setFocusFlag({
                username: true,
                email: true,
                password: true,
                confirmPassword: true,
                checkbox: true
            })

            notify("Please complete the form","error")
        }
    }

    return (




        <div className={styles.wrapper}>

            <div className={styles.header}>

                <img src={bg} alt="bg" />

                <div>
                    <h1>Sing Up</h1>
                    <div>
                        <p>Privaci policy & Term of service</p>
                        <div className={styles.line}></div>
                    </div>
                </div>

            </div>

            <div className={styles.form}>

                <div>
                    <label htmlFor="username" className={(data.username || focusFlag.username) && styles.active}>Username</label>

                    <input id="username" type="text" value={data.username} onChange={changeHandler} onFocus={focusHandler} onBlur={blurHandler} className={(data.username || focusFlag.username) && styles.active} style={{ border: (error.username && touch.username) && "2px solid red" }} />

                    <p>{(error.username && touch.username) && <span>{error.username}</span>}</p>
                </div>

                <div>
                    <label htmlFor="email" className={(data.email || focusFlag.email) && styles.active}>Email</label>
                    <input id="email" type="email" value={data.email} onChange={changeHandler} onFocus={focusHandler} onBlur={blurHandler} className={(data.email || focusFlag.email) && styles.active} style={{ border: (error.email && touch.email) && "2px solid red" }} />
                    <p>{(error.email && touch.email) && <span>{error.email}</span>}</p>

                </div>

                <div>
                    <label htmlFor="password" className={(data.password || focusFlag.password) && styles.active}>Password</label>
                    <input id="password" type="password" value={data.password} onChange={changeHandler} onFocus={focusHandler} onBlur={blurHandler} className={(data.password || focusFlag.password) && styles.active} style={{ border: (error.password && touch.password) && "2px solid red" }} />

                    <p>{(error.password && touch.password) && <span>{error.password}</span>}</p>
                </div>

                <div>
                    <label htmlFor="confirmPassword" className={(data.confirmPassword || focusFlag.confirmPassword) && styles.active} >Confirm Password</label>
                    <input id="confirmPassword" type="password" value={data.confirmPassword} onChange={changeHandler} onFocus={focusHandler} onBlur={blurHandler} className={(data.confirmPassword || focusFlag.confirmPassword) && styles.active} style={{ border: (error.confirmPassword && touch.confirmPassword) && "2px solid red" }} />

                    <p>{(error.confirmPassword && touch.confirmPassword) && <span>{error.confirmPassword}</span>}</p>
                </div>


                <div className={styles.checkBox}>
                    <div>
                        <label htmlFor="checkbox" >I accept terms of privacy policy</label>
                        <input id="checkbox" type="checkbox" value={data.checkbox} onChange={changeHandler} />
                    </div>
                    <p>{(error.checkbox && touch.checkbox) && <span>{error.checkbox}</span>}</p>
                </div>


                <div className={styles.button}>
                    <button onClick={SubmitHandler}>Register</button>
                    <div>
                        <span>or</span>
                        <Link to="loginRegister-react-css/SingIn">Sing In</Link>
                    </div>

                </div>

            </div>

            <ToastContainer />

        </div >
    )
}


export default SingUp