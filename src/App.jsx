import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import Footer from "./components/Footer/Footer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"




const App = () => {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element ={<ItemListContainer/>}/>
          <Route path="/category/:idCategory" element ={<ItemListContainer/>}/>
          <Route path="/item/:idItem" element ={<ItemDetailContainer/>}/> 
          
        </Routes>
       
      </BrowserRouter>
      <Footer/>
    </>
    
  )
}

export default App