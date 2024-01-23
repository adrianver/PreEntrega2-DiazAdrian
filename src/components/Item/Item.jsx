
import "./Item.css"
import { Link } from "react-router-dom"

const Item = ({id, nombre, precio, img, parrafo}) => {
  return (
    <div className="cardProducto">
<img src={img} alt={nombre} />
<h3 className="Nombre">Nombre: {nombre}</h3>
<p>ID:{id}</p>
<p>Precio: {precio}</p>
<Link className="Link"to={`/item/${id}`}>Ver Detalles</Link>

    </div>
  )
}

export default Item