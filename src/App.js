import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import About from './pages/About';
import Home from './pages/Home';
import './assets/style.css';
import './assets/importfiles.css'

function App() {
  return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      );
    }

    export default App;
