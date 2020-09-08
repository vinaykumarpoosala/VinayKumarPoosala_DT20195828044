import React, { Component } from 'react';

class RegisterCustomer extends Component {

    constructor(props){
        super(props);
        this.state = {
            customerId:'',
            customerName:'',
            country:''
        }
        this.validForm = this.validForm.bind(this);
        this.savePost = this.savePost.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    validForm=()=>{
        let isValid = true;
        let customerId = this.state.customerId;
        let customerName = this.state.customerName;
        let country = this.state.country
        if(!customerId){
            alert("Please enter Customer Id");
            isValid=false;
        }
        if(!Number(customerId)){
            alert("Customer Id must be a number");
            isValid=false;
        }
        if(!customerName){
            alert("Please enter Customer Name");
            isValid=false;
        }
        if(!country){
            alert("Please enter Country");
            isValid=false;
        }

        console.log(this.state);
        return isValid;

    }
    cancel(event){
        event.preventDefault();
        document.getElementById("create-course-form").reset();

    }
    savePost(event){
        event.preventDefault();
        const valid = this.validForm();
        if(valid){
            alert(`${this.state.customerId}-${this.state.customerName}-${this.state.country}`);
           
            }
        }     
    handleChange = (event) => {
        this.setState({
            [event.target.name] :event.target.value
        })
    }
    render() {
    
        return (
            <div >
            <div className="container">
                <h1>
                    Register Customer
                </h1>
               
                <div className="row">
                
                <div className="card col-md-6 offset-md-3 offset-md-3">
                
                <div className="card-body">
                <div id = "create-course-form">
                    <div className="form-group"> 
                    <input type="text"
                     name = "customerId" 
                    onChange = {this.handleChange}
                    placeholder="customerId"
                    className="form-control"
                    />
                    </div>
                  
                    <div className="form-group"> 

                    <input type="text" 
                    className="form-control"
                    name = "customerName" 
                    
                    onChange = {this.handleChange}
                    placeholder="CustomerName"

                    />
</div>
                   
                    <div className="form-group"> 
                <select 
                    className="form-control" 
                    name="country" 
                    
                    onChange={this.handleChange}>
                        <option value="">
                        Select Country
                     </option> 
                    <option value="India">
                        india
                     </option> 
                    <option value="USA">
                        USA
                    </option> 

                </select>
                    
                    </div>
                    
                    </div>
                    <button onClick = {this.savePost} className="btn btn-success"> Submit</button>
                    <button onClick = {this.cancel} className="btn btn-danger" style={{marginLeft:"10px"}}> Reset </button>


                    </div>
                    </div>
                    </div> 
            </div>
            </div>
        );
    }
}

export default RegisterCustomer;