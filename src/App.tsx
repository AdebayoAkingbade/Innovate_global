import React from 'react';
import './App.css';
import ErrComp from './components/errComp/ErrComp';
// import Header from './components/header/Header';
import Header from './components/header/Header';
import Rate from './components/rate/Rate';
import Timeline from './components/timeline/Timeline';
import TimeTab from './components/time_tab/TimeTab';

function App() {
  return (
    <div className="App">
      <Header />
      <TimeTab />
      <Rate />
      <ErrComp />
      <Timeline />
    </div>
  );
}

export default App;
