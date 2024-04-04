import Dachboard from './dachboard'
import { Route, Router, Routes } from 'react-router-dom';
import Orders from './componentOrder.js/orders';
import Employes from './Employees';


export default function Content() {
    return (
    <div className='content'>
        <Routes>
            <Route path='/dachboard' element={<Dachboard/>}/>
            <Route path='/employes' element={<Employes/>}/>
            <Route path='/orders' element={<Orders/>}/>
        </Routes>
    </div>)
}