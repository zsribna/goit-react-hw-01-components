import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import user from "info/user.json"
import data from "info/data.json"
import friends from "info/friends.json"
import transactions from "info/transactions.json"
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App user={user} data={data} friends={friends} transactions={transactions}/>
  </React.StrictMode>
);
