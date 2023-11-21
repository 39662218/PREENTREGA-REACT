import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponents from "./src/components/NavBarComponents/NavBarComponents";
import { useEffect, useState } from 'react';
import "./index.css";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import "./App.css";
import axios from 'axios';

function App () {
  
 const [products, setProducts] = useState([])



 useEffect(()    => {
  axios.get('https://dummyjson.com/products')
  .then(res =>{
    setProducts(res.data.products)
  })
  .catch ((error) => console.log (error));
 },[])
   
  const [count, setCount] = useState(0)
  return (
    <>

   <div>


    <NavBarComponents/>
    <ItemListContainer products={products}/>
    
  </div>

  </>

  
  );
}

export default App;
