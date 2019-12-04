import React from 'react'; 
import { Route } from 'react-router-dom';
import DocsList from './containers/DocsListView';
import DocsDetail from './containers/DocsDetailView';
import Login from './containers/Login';
import SignUp from './containers/SignUp';



const BaseRouter = () => (
    <div>
        <Route exact path='/' component={DocsList} />
        <Route exact path='docs/:docsID/:docsID' component={DocsDetail} />
        <Route exact path='/login/' component={Login} />
        <Route exact path='/signup/' component={SignUp} />
    </div>
);

export default BaseRouter; 