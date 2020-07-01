import React from 'react';
import MainContainer from './components/MainContainer';
import SideBar from './components/SideBar';
import './App.css';

function App() {
  return (
    <div className="app">
      <SideBar />
      <MainContainer />
    </div>
  );
}

export default App;
