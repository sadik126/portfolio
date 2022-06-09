import logo from './logo.svg';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import Service from './Component/Service/Service';
import Experience from './Component/Experience/Experience';
import Portfolio from './Component/Portfolio/Portfolio';
import Header from './Component/Header/Header';
import { useContext } from "react";
import { themeContext } from "./Context";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='App'
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}>

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
