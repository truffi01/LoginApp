import React from 'react';
import 'antd/dist/antd.css';
import CLayout from './containers/Layout';
import DocsList from './containers/DocsListView';

function App() {
  return (
    <div className="App">
      <CLayout>
        <DocsList /> 
      </CLayout> 
    </div>
  );
}

export default App;
