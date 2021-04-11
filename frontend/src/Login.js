import React from 'react'


function Login() {
    return (
        <div className="Login">
            <form className="Login__form">
                <label >Username</label>
                <input className="Login__usernameInput"></input>
                <label >password</label>
                <input type="password" name="password" className="Login__password" />
                <label>confirm password</label>
                <input type="password" name="password" className="Login__password" />
            </form>
        </div>
    )
}

export default Login
