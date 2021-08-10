import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
// import { RouteComponentProps } from 'react-router';
import {routeConfig} from './Router/router' 

class MyRouter extends Component {
    state = {  }
    render() { 
        return (      
            routeConfig.map((route,index)=>
                <Switch key={index}>
                    <Route exact path={route.path} component={route.component}/>
                </Switch> 
            )
        );
    }
}
 
export default MyRouter;