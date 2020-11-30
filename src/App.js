import React from 'react';
import './App.css';
import Child from './Child.js';
import { TransactionContext } from "./transContext.js";

function App() {
  return (
    <TransactionProvider>
      <Child />
    </TransactionProvider>
  );
}

export default App;
