import React,{ Component } from "react";

class Form extends Component{
    constructor(){
        super()
        this.state = {email:" ",Password:"",message:""}
    }

    render(){
        return(
            <div className="col-lg-9 m-4" >
                <h4 className="m-1 p-2 border-bottom">Login</h4>
                {/* Email Start */}
                <div className="form-group form-row">
                    <label className="col-lg-4"> Email :</label>
                    <input type="text" className="form-control" value={this.state.email}
                    onChange={(event)=>{this.setState({email:event.target.value})
                }}
                    />
                </div>
                {/* Email ends */}
                <div className="form-group form-row">
                    <label className="col-lg-4 m-2"> password :</label>
                    <input type="password" className="form-control" value={this.state.Password}
                     onChange={(event)=>{this.setState({Password:event.target.value})
                }}
                    />
                </div> 

                {this.state.message}
                   <div className="text-center mt-3">
                    <button className="btn btn-primary" onClick={this.clickChange}> login</button>
                   </div>
            </div>
        )
    }
    clickChange = async()=>{
        console.log(this.state);
        var response = await fetch(`http://localhost:5000/login?email=${this.state.email}&&Password=${this.state.Password}`,{method:"GET"})
        var convert = await response.json()
        console.log(convert);
       if(convert.length>0){
        this.setState({message:<span className="text-success">Succesfully Logined By User</span>})
       }
       else{
        this.setState({message:<span className="text-danger"> Enter your proper input value</span>})
       }
    }
}

export default Form