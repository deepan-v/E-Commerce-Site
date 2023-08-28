import React,{ Component } from "react";

class Product extends Component{
    constructor(props){
        super(props)
        this.state={
        products:this.props.product
    }
        
    }
    render(){
         console.log('render in rpoduct');
        return(
            
            <div className="col-lg-6">
          <div className="card m-2">
            <div className="card-body">
                <div className="text-muted"> 
                #{this.state.products.id}
                <span className="pull-right hand-icon handchange " onClick={()=>{this.props.Ondelete(this.state.products)}}>
                    <i className="fa fa-times"> </i>
                </span>
                </div>
                <h5 className="pt-5 border-top">{this.state.products.productname}</h5>
                <div>$ {this.state.products.Price}</div>
            </div>
            <div className="card-footer text-right ">
                <div className="float-center">
                    <span className="badge bg-secondary">{this.state.products.quality}</span>
                    <div className="btn-group m-2 ">
                        <button className="btn btn-outline-success" onClick={()=>{this.props.increament(this.state.products,10)}}>+</button>
                        <button className="btn btn-outline-success"  onClick={()=>{this.props.decreament(this.state.products,0)}}>-</button>
                    </div>
                </div>
                <div className="float-center m-2">{this.props.children}</div>
                </div>
          </div>
          </div>
        )
    }


    

      
        
}

export default Product