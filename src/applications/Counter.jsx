import React, { useState } from 'react'
import '/index.css'
const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div className='container'>
            <h1 style={{
                color:
                    count === 0 ? 'green' :
                        count % 2 == 0 ? 'red' : 'blue'
            }}>Count : {count}</h1>

            <div className="button-group">
                <div className="button-valueChange">
                    <button onClick={() => {
                        if (count > 4) return;
                        setCount(count + 1);
                    }}>Increment</button>

                    <button onClick={() => {
                        if (count < -4) return;
                        setCount(count - 1);
                    }}>Decrement</button>
                    <button onClick={() => {
                        setCount(0);
                    }}>Reset</button>
                </div>
            </div>
        </div>
    )
}
export default Counter;