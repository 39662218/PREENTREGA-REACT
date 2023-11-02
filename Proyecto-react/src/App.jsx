import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './components/NavBarComponents/NavBarComponent';
import { useState } from 'react';
import '../src/index.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App () {
 
  const [count, setCount] = useState(0)
  return (
    <>

   <div>


    <NavBarComponent/>
    <ItemListContainer greeting="PIXIES TIENDA ONLINE"/>
    
  </div>

  </>

  
  );
}

export default App;
