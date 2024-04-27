import {Link} from "react-router-dom"
import './Cardadd.css';
import { useSelector, useDispatch } from 'react-redux'


const Cardadd=()=>{

    const products=useSelector(state => console.log(state))  
    console.log(products)
return(
    <>
      <div className="add-sec">
        <div className="add-contaner">
          <dic className="add-header">
             <h1>Add to card page</h1>
             <Link to={"/"}>Home page</Link>
          </dic>
            <div className="add-card">
                 <img src="#"  />
                 <h2>name</h2>
                 <h2>price</h2>
                <button>Remove</button>
            </div>
        </div>
      </div>

    </>
)

}

export default Cardadd 