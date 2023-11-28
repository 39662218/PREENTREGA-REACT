import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponents from "./src/components/NavBarComponents/NavBarComponents";
import { useEffect, useState } from 'react';
import "./index.css";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import "./App.css";
import axios from 'axios';
import { TestProvider } from './context/ContextTest';

function App () {
  
 const [products, setProducts] = useState([])



 useEffect(()    => {
  axios.get('https://dummyjson.com/products')
  .then(res =>{
    setProducts(res.data.products)
  })
  .catch ((error) => console.log (error));
 },[]);
   
  const [count, setCount] = useState([])
  return (
    <>

   <div>


    <NavBarComponents/>
    <ItemListContainer products={products} />
    
  </div>

  </>

  
  );
}


function App () {
  return

  <TestProvider>
    <div>
  <mainRouter/>
      </div>


  </TestProvider>
}
export default App;
