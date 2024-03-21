import { categories } from "../../Helper/data";
const Navbar=()=>{
    return(
        <nav className="navbar">
          {  categories.map((item)=>
            <button className="btns">
               {item} </button>)}
        </nav>
    )

}

export default Navbar