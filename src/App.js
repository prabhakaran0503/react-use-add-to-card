import logo from './logo.svg';
import './App.css';
import Card from './Card'
import { Provider } from 'react-redux';
import {store} from './Store'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Cardadd from './Cardadd';


function App() {
  

  return (
    <>
    < BrowserRouter>
      <Provider store={store}>
        <Routes>
           <Route path='/' element={<Card  />}></Route>
           <Route path='/Cardadd' element={<Cardadd  />}></Route>
        </Routes> 
       </Provider>
    </BrowserRouter>
    </>
  );
}

export default App;
