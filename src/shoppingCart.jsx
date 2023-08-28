import { Component } from "react";
import Product from "./product";

class Shoppingcart extends Component{
    
    constructor(){
        console.log('constructor shoppping cart');
        super();
        this.state={
        products:[]
    }
    }
    
    render(){

        console.log('render shopping cart');
        return( 
           <div className="container-fluid">
            <h1 className="heading">Shoping Cart</h1>

             <div className="row">
                {this.state.products.map((prod)=>{
                return(
                <Product
                key={prod.id} 
                product={prod}
                increament={this.increamentNum}
                decreament = {this.decreamentNum}
                Ondelete = {this.Handledelete}
                >
                    <button className="btn btn-primary ">Buy Now</button>
                </Product>
                   )
            })}
            </div>
           </div>
        )
    }
    
    componentDidMount = async()=>{
        var response = await fetch('http://localhost:5000/products',{method:"GET"})
        var call = await response.json()
        this.setState({products:call})

    }
    componentDidUpdate(prevProps,prevState){
       
    }
    componentDidCatch(error,info){
        console.log(error,info);

        localStorage.lastError = `${error} \n${JSON.stringify(info)}`
    }
   
    // executes when user click on-button
    increamentNum = (product,maxValue)=>{
        
         //get index of selected product
        let clone = [...this.state.products]
        let index = clone.indexOf(product)
       if(clone[index].quality < maxValue)
        clone[index].quality++

        //update the state of current object (parent components)
        this.setState({products:clone})
    }

     // executes when user click on-button
    decreamentNum = (product,minValue)=>{
        //get index of selected product
        let clone = [...this.state.products]
        let index = clone.indexOf(product)
         if(clone[index].quality > minValue)
        clone[index].quality--

        //update the state of current object (parent components)
        this.setState({products:clone})
    }   
    
     Handledelete = (product)=>{
         let clone = [...this.state.products]
        let index = clone.indexOf(product)

        if(window.confirm('Are you Sure Want To Delete This Item On the Card'))
        clone.splice(index,1)

        this.setState({products:clone})
     }
   
}

export default Shoppingcart