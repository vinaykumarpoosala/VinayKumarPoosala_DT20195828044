import React, { Component } from 'react';

class NavigationComponent extends Component {
    render() {
        return (
         <div className="container">
          <div className="nav-header">
              <h1 className="company"><em>Single Page Application</em></h1>
            <ul className="nav nav-tabs" id="navId">
                
                <li className="nav-item">
                    <a href="/" className="nav-link active">Home</a>
                </li>
                
                <li className="nav-item">
                    <a href="/viewCustomers" className="nav-link">ViewCustomers</a>
                </li>
                <li className="nav-item">
                    <a href="/registerCustomer" className="nav-link">RegisterCustomer</a>
                </li>
                
                
            </ul>
            
           
            
          
            </div>    
           
            </div>
        );
    }
}

export default NavigationComponent;