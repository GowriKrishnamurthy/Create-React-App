import React from 'react'

const Counter = () => {

    const [count,setCount]=React.useState(0);

    const handleIncrement=()=>{
        setCount(count+1);
    } 
    return (
        <React.Fragment>
            <p> The count is: {count}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={()=>{setCount(count-1)}}>Decrement</button>
        </React.Fragment>
    )
}

export default Counter
