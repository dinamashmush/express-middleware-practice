import React, { useState } from 'react'


function SignUp() {

    const [name, setName] = useState("")
    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")
    const [age, setAge] = useState()
    const [isPremium, setIsPremium] = useState(false)

    return (
        <div style={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection:'column' }}>
            <h2>Express Middleware</h2>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <input placeholder="name" type="text" value={name} ></input>
                <input placeholder="password" type="password" value={password}></input>
                <input placeholder="mail" type="email" value={mail}></input>
                <input placeholder="age" type="number" value={age}></input>
                <input type="radio" checked={isPremium} onChange={() => setIsPremium(true)} />
                <input type="radio" checked={!isPremium} onChange={() => setIsPremium(false)} />
                <input type="submit" />
            </div>
        </div>
    )
}

export default SignUp;