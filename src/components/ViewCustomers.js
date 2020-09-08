import React, { Component } from 'react';

class ViewCustomers extends Component {

    constructor(props){
        super(props);
        
    }
    

    
    render() {
        return (
            <div className="container">
                <h2> This is Customer Details Page </h2>
                <table className="table table-dark" align="center">
                
                    <tr className="table-row" >
                        <td>
                            customer Id
                        </td>
                        <td>
                            Customer Name
                        </td>
                        <td>
                            Country
                        </td>
                    
                     </tr>
                     <tr className="table-row" >
                        <td>
                            101
                        </td>
                        <td>
                            Adam Henry
                        </td>
                        <td>
                            India
                        </td>
                    
                     </tr>
                     <tr className="table-row" >
                        <td>
                            102
                        </td>
                        <td>
                            John Henry
                        </td>
                        <td>
                            USA
                        </td>
                    
                     </tr>
                
            </table>    
            </div>
        );
    }
}

export default ViewCustomers;