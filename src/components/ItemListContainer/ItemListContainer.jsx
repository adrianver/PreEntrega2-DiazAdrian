import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { getProductos, getProductosPorCategoria } from "../../asyncmock" 
import {useParams } from "react-router-dom"


const ItemListContainer = () => {
const [productos, setProductos] =useState ([]);
const {idCategory}=  useParams ();


useEffect( ()=>{
const funcionProductos =  idCategory ?  getProductosPorCategoria : getProductos;
funcionProductos (idCategory)
    .then (res=>setProductos (res))
    .catch (error=>console.log (error))
}, [idCategory])

  return (
    <div>
    
    <h2>Nuestros Ebooks</h2>
<ItemList productos={productos}/>

    </div>
  )
}

export default ItemListContainer