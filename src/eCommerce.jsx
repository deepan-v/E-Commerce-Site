import { Component } from "react"


class Customers extends Component{
    state={
        customer:'customer',
        number:5 ,
        customerName:[
            {no:1 , photo:'https://picsum.photos/id/26/60', name:'robert', phone:'3274-53443',address:{city:'chennai'}},
    
            {no:2 ,photo:'https://picsum.photos/id/1/60', name:'albert', phone:'7487-56545',address:{city:'Madurai'}},
            {no:3 ,  photo:'https://picsum.photos/id/25/60', name:'thomas', phone:'2588-98755',address:{city:'Namakal'}},
            {no:4 , photo:'https://picsum.photos/id/17/60', name:'sutin' , phone:null,address:{city:'Dindukal'}},
            {no:5 , photo:'https://picsum.photos/id/29/60', name:'trumph', phone:null,address:{city:'Ooty'}},
        ]
}

//  Dynamic =(text)=>{
//     if(text.startsWith("s")) return 'green-heighlight border-top' 
//     else if(text.startsWith("r")) return 'red-heighlight "border border-danger' 
//     else return ""
//  }
    render(){
        return(
      <div>
        
        <table className="table">
            <thead>
                <tr>
                    <th>No :</th>
                    <th> Product Img</th>
                    <th> Product Name </th>
                    <th>Sales Details </th>
                    <th>Prize</th>
                    <th>Plus|Mines</th>
                    <th>Add Product</th>
                </tr>
            </thead>
            <tbody>{this.renderTable()}</tbody>
        </table>
        
      </div>
        )
    }
    print=()=>{
        this.setState({number:7});
    }
    condtionalRender = (phone)=>{
         if(phone){
            return phone 
         }else{
           return <div className="badge rounded-pill bg-warning text-dark p-2 text-center">No Phone</div>
         }                          
    }
     renderTable=()=>{
       return(
        this.state.customerName.map((cust,index)=>{
                return (
                <tr key={cust.name}>
                 <td >{cust.no}</td>
                 <td><img src={cust.photo}/>
                 <div>
                  <button className="btn btn-success" onClick = {()=>{this.onchangeTheContent(cust,index)}}>Change content</button>
                 </div>
                  </td>
                 <td>{cust.name}</td>
                 <td>{this.condtionalRender(cust.phone)}</td>
                 <td>{cust.address.city}</td>
                 <td>{cust.address.city}</td>
                 <td>{cust.address.city}</td>
                </tr>
                )
           } ) 
       )
     }
     //executes when user click on 'Change content' button in the grid
     //Receive the "customername " object and  index of the  currently clicked customer

     onchangeTheContent=(deepan,index)=>{
      //get existing customername

      let arrayFunction = this.state.customerName;
      arrayFunction[index].photo = 'https://picsum.photos/id/44/60'

      //update the "customername " array in state 
      this.setState({customerName:arrayFunction})
     }
}


export default Customers