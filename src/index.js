import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Primeiro from './pages/Primeiro';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Segundo from './pages/Segundo';
import Terceiro from './pages/Terceiro';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Primeiro />} />
        <Route path="/segundo" element={<Segundo/>} />
        <Route path="/terceiro" element={<Terceiro/>}/>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
