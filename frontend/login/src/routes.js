import React from 'react'; 
import { Route } from 'react-router-dom';
import DocsList from './containers/DocsListView';
import DocsDetail from './containers/DocsDetailView';
import Login from './containers/Login';



const BaseRouter = () => (
    <div>
        <Route exact path='/' component={DocsList} />
        <Route exact path='/:docsID' component={DocsDetail} />
        <Route exact path='/login/' component={Login} />
    </div>
);

export default BaseRouter; 