import React, { useState } from 'react';
import { getSmurfs } from '../actions/index.js'
import { addSmurf } from '../actions/index.js'
import { useDispatch } from 'react-redux'



const SmurfForm = () => {

    const [state, setState] = useState(
        {
            name: "",
            age: "",
            height: ""
        }
    )
    const dispatch = useDispatch()

    const smurfHandler = (e) => {
        e.preventDefault()
        dispatch(addSmurf(state))

    }

    const handleSmurfs = () => {
        dispatch(getSmurfs())
    }


    const textHandler = (e) => {

        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <form onSubmit={(e) => { smurfHandler(e) }}>
                <input
                    type="text"
                    placeholder="name"
                    name="name"
                    value={state.name}
                    onChange={(e) => textHandler(e)}
                />
                <input
                    type="text"
                    placeholder="age"
                    name="age"
                    value={state.age}
                    onChange={(e) => textHandler(e)}
                />
                <input
                    type="text"
                    placeholder="height"
                    name="height"
                    value={state.height}
                    onChange={(e) => textHandler(e)}
                />
                <button>submit</button>
            </form>
            <button onClick={(() => { handleSmurfs() })}>Get Smurfs!</button>
        </div>

    );
}

export default SmurfForm
