import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'


function Login(){
    return(
        <div className="login">
            <div className="LogoName">
            Amazon.com </div>
            <Link>
            <img className="login__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>
            </Link>
            <div className="login__container">
                <h1>
                    Sign In
                </h1>
                <form>
                    <h5>Email</h5>
                    <input type="email"/>
                    <h5>Password</h5>
                    <input type="Password"/>
                    <button type="submit" className="login__signInButton">Sign In</button>
                    <p>By Sign-in you agree to the amzaon terms and condtions </p>
                    <button className="login__RegisterButton">Create your amazon account</button>
                </form>
            </div>
        </div>
    )
}

export default Login