import React,{useState} from "react"; 
function Counter() {
    const [count, setCount] = useState(0);
    const [name,setName]=useState('');
    
    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={()=> setCount(count+1)}>Increment</button>
            <button onClick={()=> setCount(count-1)}>Decrement</button>
            <button onClick={()=> setCount(0)}>Reset</button>

            <br />
            <p>Name: {name}</p>
            <button onClick={()=> setName("Akriti")}>AK</button>
            <button onClick={()=> setName("Minnie")}>Mn</button>
            <button onClick={()=> setName('')}>Reset</button>

            
        </div>
    );
}
export default Counter;