
import {react,useState} from "react"
import { useSelector, useDispatch } from 'react-redux'
import './card.css'
import {Link} from "react-router-dom";

import Cardadd from './Cardadd';
import { addtocard } from "./Slices/card-slice";


const Card=()=>{
    let dispatch=useDispatch()
    let products =useSelector((e)=> e.card.cardproduct.cardproduct);
 
     console.log(products);
    

    // console.log(product.cardproduct.name); 
   let outputCard= products.map((e)=>{
        // console.log(e.name);
        return (
         <div className="card">
            <img src={e.img} />
            <h2>{e.name}</h2>
            <h3>{e.price}</h3>
            <button onClick={()=>dispatch( addtocard(products))} >{e.btn}</button>
        </div>
      )
    })
    return(
       <div className="sec">
         <div className="contaner">
           <dic className="header">
              <h1>Add to card</h1>
            < Link to={"/Cardadd"}><i class="bi bi-cart-fill">click</i></Link> 
           </dic>
           <div className="card-par">
             {outputCard}
           </div>   
         </div>
       </div>
    )
}
export default Card;
