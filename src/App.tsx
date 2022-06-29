import React from 'react';
import './App.css';
// import Header from './components/header/Header';
import Header from './components/header/Header';
import Rate from './components/rate/Rate';
import TimeTab from './components/time_tab/TimeTab';

function App() {
  return (
    <div className="App">
      <Header />
      <TimeTab />
      <Rate />
    </div>
  );
}

export default App;
