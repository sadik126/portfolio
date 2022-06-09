import logo from './logo.svg';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import Service from './Component/Service/Service';
import Experience from './Component/Experience/Experience';
import Portfolio from './Component/Portfolio/Portfolio';
import Header from './Component/Header/Header';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}>



        </Route>
        <Route path='/service' element={<Service></Service>}></Route>
        <Route path='/experience' element={<Experience></Experience>}></Route>
        <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
      </Routes>

    </div>

  );
}

export default App;
