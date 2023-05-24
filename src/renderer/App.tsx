import './App.css';

import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';

import PrinterComponent from './printhermal/PrinterComponent';
import AutoUpdaterComponent from './autoupdater/AutoUpdaterComponent';

function Hello() {
  return (
    <div>      
      <h1>Electron AutoUpdate</h1>            
      <h2>App Version : 0.0.1</h2>
      <br/>    
      <br/>            
      <PrinterComponent />            
      <AutoUpdaterComponent />         
      
  </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
