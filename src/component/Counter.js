import React, { useState} from 'react';

function Counter() {
    const [number, setNumber] = useState(0)
    const [form, setForm] = useState({
        name: 'your name',
        gender: 'your gender'
    })


    const {name, gender} = form

    const handleKeyPress = e => {
        if(e.key ==='Enter'){
            setForm({
                ...form,
                [e.target.name]: e.target.value 
            })
        }
    }

    return (
        <div style={{position:"relative"}}>
            <div className="fixed-box">Counter</div>
            <input value={number} readOnly/>
            <button onClick={e=>setNumber(number +1)}>+</button>
            <button onClick={e=>setNumber(number -1)}>-</button>
            <fieldset>
                <legend>name</legend>
                <input name="name" onKeyPress={handleKeyPress}/>
            </fieldset>
            <fieldset>
                <legend>gender</legend>
                <input name="gender" onKeyPress={handleKeyPress}/>
            </fieldset>
            <br/>{name}
            <br/>{gender}
        </div>
    );
}

export default Counter;