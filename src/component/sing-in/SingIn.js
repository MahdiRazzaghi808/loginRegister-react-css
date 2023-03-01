import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import bg from '../../asset/bg.jpg'

// style component
import styles from './SingIn.module.css'

import { validation } from '../validation/validation'


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { notify } from "../toastify/toastify"


const SingIn = () => {

    const [focusFlag, setFocusFlag] = useState({
        email: false,
        password: false,

    })

    const [data, setData] = useState({
        email: "",
        password: "",

    })

    const [touch, setTouch] = useState({

        email: false,
        password: false,

    })

    const [error, setError] = useState({});





    const changeHandler = event => {
        setData({ ...data, [event.target.id]: event.target.value })
    }




    const focusHandler = event => {
        setFocusFlag({ ...focusFlag, [event.target.id]: true })
    }

    const blurHandler = event => {
        // setFocusFlag({ ...focusFlag, [event.target.id]: false })
        setTouch({ ...touch, [event.target.id]: true })

    }



    useEffect(() => {
        setError(validation(data, "signIn"))
    }, [data])



    const submitHandler = () => {
        if (!Object.keys(error).length) {
            notify("Welcome to your account", "success")
        } else {
            setTouch({
                email: true,
                password: true,
            })

            setFocusFlag({
                email: true,
                password: true,

            })

            notify("Invalid information", "error")
        }
    }


    return (
        <div className={styles.wrapper}>

            <div className={styles.header}>

                <img src={bg} alt="bg" />

                <div>
                    <h1 className={styles.singIn}>Sing In</h1>
                </div>

            </div>

            <div className={styles.form}>


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





                <div className={styles.button}>


                    <Link to="loginRegister-react-css/SingUp">Sing Up</Link>

                    <button onClick={submitHandler}>Login</button>
                </div>

            </div>

            <ToastContainer />

        </div>
    )
}


export default SingIn