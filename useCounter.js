import { useState } from "react"

export const useCounter =(initialState=10) =>{

    const [counter, setCounter] = useState(initialState)
    
    const increment = (value=1)=>{
        setCounter( (current)=>current+value );
    }

    const decrement = (value=1, min)=>{
        if (counter===min) return;
        setCounter( (current)=> counter-value );
    }

    const reset = ()=>{
        setCounter(initialState);
    }

    return{
        counter,
        increment,
        decrement,
        reset,
    }
}