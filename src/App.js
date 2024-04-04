import { BrowserRouter as Router } from 'react-router-dom'
import Sidebar from './sidebar'
import Navbar from './navbar';
import Content from './content';
import Dachboard from './dachboard'
import { Route, Routes } from 'react-router-dom';


export default function App() {
  let data = 'issam'
  return (<>
    <div className='body'>
      <Sidebar />
      <Navbar />
      q
      <Content/>
    </div>
  </>
  );
}
