
import { useState } from "react";
const Content = () =>  {
    const [name, setName] = useState('Sir Obimbo');
    const [count, setCount] = useState('');

    const handleNameChange = () => {
        const names = ['Austin', 'Mr Obimbo', 'Sir Obimbo',]
        const int = Math.floor(Math.random() * 3); 
        setName(names[int]);
    }

    const  handleClick = () => {
        setCount(count + 1);
        console.log(count);
    }

    const handleClick2 = () => {
        console.log(count);
    }
   
    
  return (
    <main>
        <p onDoubleClick={handleClick}>
            Hello {name}
        </p>
        <button onClick = {handleNameChange}>Change name</button>
        <button onClick = {handleClick}>Click It</button>
        <button onClick = {handleClick2}>Click to count</button>


    </main>
  )
}

export default Content