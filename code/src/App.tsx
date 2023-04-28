import React from 'react';
import './styles.css';
import CreateSet from './pages/CreateSet'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Header from './components/Header'
import Study from './pages/Study'
import Sets from './pages/Sets'




function App() {
  
  return (
    <Router>
      <div className="App">
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create' element={<CreateSet />} />
            <Route path='/sets' element={<Sets />} />
            <Route path='/study' element={<Study />} />
            {/* <Route path='*' element={<NotFound />} /> */}
          </Routes>
      </div>
    </Router>
  );
}

export default App;
