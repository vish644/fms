import './App.css';
import { Routes, Route } from "react-router-dom";
import Register from './Auth/Register';
import Login from './Auth/Login';
import StockDetails from './Home/StockDetails';
import PurchaseDetails from './Home/PurchaseDetails';
import SaleDetails from './Home/SaleDetails';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" default element={<Login />} />
        <Route path='/register' element={<Register />}/>
        <Route path='/stockd' element={<StockDetails />}/>
        <Route path='/purchased' element={<PurchaseDetails />}/>
        <Route path='/saled' element={<SaleDetails />}/>
      </Routes>
    </>
  );
}

export default App;