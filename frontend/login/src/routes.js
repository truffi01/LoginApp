import React from 'react'; 
import { Route } from 'react-router-dom';
import DocsList from './containers/DocsListView';
import DocsDetail from './containers/DocsDetailView';



const BaseRouter = () => (
    <div>
        <Route exact path='/' component={DocsList} />
        <Route exact path='/:docsID' component={DocsDetail} />
    </div>
);

export default BaseRouter; 