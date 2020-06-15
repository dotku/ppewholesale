import React from 'react';
import './App.css';
import Providers from './components/providers';
import Footer from './components/common/footer';
import Top from './components/common/top';

function App() {
  return (
    <div className="App">
      <Top />
      <Providers />
      <Footer />
    </div>
  );
}

export default App;
