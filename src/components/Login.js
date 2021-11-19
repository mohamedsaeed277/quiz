import React from 'react';

const Login = ({onQuizStart}) => {

    return (
        <form>
           <input className="input" type="name" placeholder="Enter Your Name" /> 
           <input className="input" type="email" placeholder="Enter Your Email" /> 
           <input className="input" type="password" placeholder="Enter Your Password" /> 
           <button type="submit" className="button is-info is-medium" onClick={onQuizStart}>Login</button>
        </form>
    )
}

export default Login