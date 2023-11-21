import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "./components/NavBarComponents/NavBarComponents";
import { useState } from 'react';
import "../src/index.css";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import "./App.css";

function App () {
 
  const [count, setCount] = useState(0)
  return (
    <>

   <div>


    <NavBarComponents/>
    <ItemListContainer greeting="PIXIES TIENDA ONLINE"/>
    
  </div>

  </>

  
  );
}

export default App;
