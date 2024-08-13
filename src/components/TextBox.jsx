import { useState } from "react";

const TextBox=()=>{
    const onPClick=(v)=>{
        alert("Button clicked.")
    }

    const [name,setName]=useState('');
    const updateName=(e)=>{
        const username=e.target.value;
        setName(username);
    }
    return(
        <div>
            <p onClick={onPClick}>This is me.{name} </p>
            <input value={name} onChange={updateName}/>
            <p>Name:{name}</p>
        </div>
    );
}
export default TextBox;