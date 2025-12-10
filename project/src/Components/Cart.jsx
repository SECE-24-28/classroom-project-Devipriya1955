import {useState} from 'react';
const Cart=()=>{
    const [count,setCount]=useState(0);
    const [sub,setSub]=useState(1000);
    return (
        <div>
            <h2>This is Cart Component</h2>
            <button onClick={()=>setCount(count+1)}>Add to Cart</button><br></br><br></br>
            <button onClick={()=>setSub(sub-1)}>Remove From Cart</button>
            <h3>Items in Cart: {count}</h3>
            <h4>Removed Items in Cart: {sub}</h4>

        </div>
    )
}
export default Cart;