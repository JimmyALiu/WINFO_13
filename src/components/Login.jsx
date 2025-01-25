import React from 'react'
import test from '../test'

export default function Login() {
    return (
        <div className='login'>
            <button onClick={() => {return test.jsx}}>
                <h3>Login with your school ID</h3>
            </button>
        </div>
    )
}
