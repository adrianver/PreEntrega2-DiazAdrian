import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";
import { Link,NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <Link to="/">< img src="../img/logo.jpg" alt="ebookTandil logo" className="logo"/> </Link>
       
        <nav>
            
            <ul> 
                
                <li>
                  <NavLink className="Link" to="/category/1">Literatura</NavLink>
                </li>              
                <li>
                  <NavLink className="Link" to="category/2">Humanidades</NavLink>
                </li>
                <li>
                <NavLink className="Link" to="category/3">Ciencia</NavLink>                  
                </li>
                <li>
                  <NavLink className="Link" to="category/4">Juvenil </NavLink>               
                </li>
               
                <li>
                  <NavLink className="Link" to ="category/5"> Estilo de Vida</NavLink>
                </li>

                
            </ul>
        </nav>
      <CartWidget/> 

    </header>
  )
}

export default NavBar