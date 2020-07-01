import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ProductTable from './productTable/productTable.js';

class App extends Component {

  render() {
    
    const cars = [
      {
        name: 'fuck',
        price: '1',
        stock: '31',
      },
      {
        name: 'shit',
        price: '2',
        stock: '11',
      },
      {
        name: 'piss',
        price: '4',
        stock: '2',
      },
      {
        name: 'ass',
        price: '4',
        stock: '0',
      },
      {
        name: 'hell',
        price: '4',
        stock: '666',
      },     
    ];

    // let sortedProducts = [...cars];
    //   sortedProducts.sort((a, b) => {
    //     if (a.name < b.name) {
    //       return -1;
    //     }
    //     if (a.name > b.name) {
    //       return 1;
    //     }
    //     return 0;
    // });

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload me.
        </p>
        <ProductTable products={cars}></ProductTable>
      </div>
    );
  }
}

export default App;
