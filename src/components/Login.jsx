import React from 'react'

export default function Login() {
    const { setLoggedIn } = props

    return (
        <div className='login'>
            <button onClick={() => setLoggedIn(true)}>
                <h3>Login with your school ID</h3>
            </button>
        </div>
    )
}
