import React from "react";

const Awarded =(props)=>{
    const Style={
        backgroundColor:"#3498db", 
        color:"white", 
        width:"9vw", 
        display:"inline",
        margin:"0 auto"
    }
    return(
        <>
        <div className="modal fade" id="myModal">
        <div className="modal-dialog modal-lg">
        <div className="modal-content">
            <div className="modal-header">
            <h5 className="modal-title">Buyer Information</h5>
            <button type="button" className="close" data-dismiss="modal">&times;</button>
            </div>
         <div className="modal-body">
            <div className="form-row col-12 col-sm-12">
            <div className="form-group col-12 col-sm-6">
             <label htmlFor="name">First Name</label>
              <input type="text" className="form-control" placeholder="Enter first name"></input>   
            </div>
            <div className="form-group col-12 col-sm-6">
             <label htmlFor="name">Last Name</label>
             <input type="text" className="form-control" placeholder="Enter last name"></input>  
            </div>
            </div>
            <div className="form-row col-12 col-sm-12">
            <div className="form-group col-12 col-sm-6">
             <label htmlFor="title">Title</label>
              <input type="text" className="form-control" placeholder="title"></input>   
            </div>
            <div className="form-group col-12 col-sm-6">
             <label htmlFor="number">Phone number</label>
             <input type="text" className="form-control" placeholder="phone number"></input>  
            </div>
            </div>
            <div className="form-row col-12 col-sm-12">
            <div className="form-group col-12 col-sm-6">
             <label htmlFor="fax">Fax</label>
              <input type="text" className="form-control" placeholder="fax"></input>   
            </div>
            <div className="form-group col-12 col-sm-6">
             <label htmlFor="email">Email</label>
             <input type="text" className="form-control" placeholder="Enter email"></input>  
            </div>
            </div>
            <div className="form-row col-12 col-sm-12">
            <div className="form-group col-12 col-sm-6">
             <label htmlFor="office">Contracting Office</label>
              <input type="text" className="form-control" placeholder="contracting office"></input>   
            </div>
            <div className="form-group col-12 col-sm-6">
             <label htmlFor="addres">Address</label>
             <input type="text" className="form-control" placeholder="Enter address"></input>  
            </div>
            </div>
            <div className="form-row col-12 col-sm-12">
            <div className="form-group col-12 col-sm-6">
             <label htmlFor="city">City</label>
              <input type="text" className="form-control" placeholder="city"></input>   
            </div>
            <div className="form-group col-12 col-sm-6">
             <label htmlFor="state">State</label>
             <input type="text" className="form-control" placeholder="state"></input>  
            </div>
            </div>
            <div className="form-row col-12 col-sm-12">
            <div className="form-group col-12 col-sm-6">
             <label htmlFor="code">Zip Code</label>
              <input type="text" className="form-control" placeholder="zip code"></input>   
            </div>
            <div className="form-group col-12 col-sm-6">
             <label htmlFor="agency">Agency</label>
             <input type="text" className="form-control" placeholder="agency"></input>  
            </div>
            </div>
        </div>
            <div className="modal-footer">
            <button type="button" className="btn btn-primary" data-dismiss="modal">Save</button>
            <button type="button" className="btn btn-primary" data-dismiss="modal">Edit</button>
            <button type="button" className="btn btn-primary" data-dismiss="modal">Reset</button>
            </div>
        </div>
        </div>
        </div>
        <div className={props.value}>
        <div className="container">
        <div className="row">
        <div className="card">
        <div className="card-body">

        
        <form className="main-form">

       <div className="form-row col-12 col-sm-12">
         <div className="form-group col-12 col-sm-6">
             <label htmlFor="name">Awarded Firm's Name</label>
              <input type="text" className="form-control" placeholder="Enter name"></input>   
         </div>
         <div className="form-group col-12 col-sm-6">
             <label htmlFor="website">Awarded Firm's Website</label>
             <input type="text" className="form-control" placeholder="website"></input>  
          </div>
       </div>
       <div className="form-row col-12 col-sm-12">
         <div className="form-group col-12 col-sm-6">
         <label htmlFor="date">Enter Buyer Information</label><br/>
         <button type="button" className="btn btn-warning" style={{color:'white'}} data-toggle="modal" data-target="#myModal">Buyer Information</button>
         </div>
       </div>
      
       <br/><br/>
       
       <input type="submit" style={Style} className="form-control" value="Submit"></input>
       <input type="submit" style={Style} className="form-control" value="Reset"></input>
        </form>
        </div>
        </div>
        </div>
        </div>
        </div>
        </>
    )
}

export default Awarded;