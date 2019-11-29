import React from 'react';
import 'antd/dist/antd.css';
import CLayout from './containers/Layout';
import DocsList from './containers/DocsListView';
import BaseRouter from './routes';
import { BrowserRouter as Router } from 'react-router-dom'; 

function App() {
  return (
    <div className="App">
      <Router> 
      <CLayout>
        <BaseRouter />  
      </CLayout> 
      </Router> 
    </div>
  );
}

export default App;
