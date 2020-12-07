import React from 'react';
import './App.css';
import History from './components/History.js';
import Form from './components/Form.js';
import Footer from './components/Footer.js';
import Header from './components/Header.jsx';
import IncomeExpense from './components/IncomeExpense.js'
import { TransactionProvider } from "./context/transContext.js";

function App() {
  return (
    <TransactionProvider className="main">
      <Header />
      <div className="container">
        <IncomeExpense />
        <History />
        <Form />
      </div>
      <Footer />
    </TransactionProvider>
  );
}

export default App;
