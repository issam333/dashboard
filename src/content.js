import Dachboard from './dachboard'
import { Route, Router, Routes } from 'react-router-dom';
import Orders from './componentOrder.js/orders';
import Employes from './employes';
import Customers from './customers';
import Calendar from './folderCalendar/calendar';
import ColorPicker from './ColorPicker';
import Chartline from './charts/chartline';
import Chartarea from './charts/chartarea';
import Chartbar from './charts/chartbar';
import Chartpie from './charts/chartpie';


export default function Content({isContentVisible}) {


    return (
    <div className='content' style={isContentVisible ? {gridColumn:'1/13',}:{}}>
        <Routes>
            <Route path='/dachboard' element={<Dachboard/>}/>
            <Route path='/employes' element={<Employes/>}/>
            <Route path='/orders' element={<Orders/>}/>
            <Route path='/customers' element={<Customers/>}/>
            <Route path='/calendar' element={<Calendar/>}/>
            <Route path='/colorPicker' element={<ColorPicker/>}/>
            <Route path='/Chartline' element={<Chartline/>}/>
            <Route path='/chartarea' element={<Chartarea/>}/>
            <Route path='/Chartbar' element={<Chartbar/>}/>
            <Route path='/Chartpie' element={<Chartpie/>}/>
            <Route path='/financial' element={<ColorPicker/>}/>
        </Routes>  
    </div>)
}