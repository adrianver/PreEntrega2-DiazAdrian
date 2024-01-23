import "./ItemDetail.css"
import { Link } from "react-router-dom"

const ItemDetail = ({id, nombre, precio, img, parrafo}) => {
  return (
    <div className="contenedorItem">
        <h2>Nombre: {nombre}</h2>
        <h3 className="Precio">Precio: $ {precio}</h3>
        <p>ID: {id}</p>       
        <img className="idescripcion"src={img} alt={nombre} />
        <h3><em>Descripción:</em> </h3>
      <p className="descripcion">{parrafo}</p>
       <button className="btn btn-primary"><Link to={"/"} className="volver">Volver</Link></button> 
    </div>
  )
}

export default ItemDetail