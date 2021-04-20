import React,{useState} from "react";

const Solicitated =(props)=>{
    const Style={
        backgroundColor:"#3498db", 
        color:"white", 
        width:"9vw", 
        display:"inline",
        margin:"0 auto"
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
    }

    const[proposal,setproposal]=useState("none");
    const proposalHandle=(event)=>{
            if(event.target.value==="yes")
            {
                setproposal("");
            }
            else
            {
                setproposal("none");
            }
    }
    return(
        <>
        <div className="modal fade" id="myModal2">
        <div className="modal-dialog modal-lg">
        <div className="modal-content">
            <div className="modal-header">
            <h5 className="modal-title">End User Information</h5>
            <button type="button" className="close" data-dismiss="modal">&times;</button>
            </div>
         <div className="modal-body">
            <div className="form-row col-12 col-sm-12">
            <div className="form-group col-12 col-sm-4">
             <label htmlFor="name">First Name</label>
              <input type="text" className="form-control" placeholder="Enter first name"></input>   
            </div>
            <div className="form-group col-12 col-sm-4">
             <label htmlFor="name">Last Name</label>
             <input type="text" className="form-control" placeholder="Enter last name"></input>  
            </div>
            <div className="form-group col-12 col-sm-4">
             <label htmlFor="title">Title</label>
              <input type="text" className="form-control" placeholder="title"></input>   
            </div>
            </div>
            <div className="form-row col-12 col-sm-12">
            
            <div className="form-group col-12 col-sm-4">
             <label htmlFor="number">Direct Phone number</label>
             <input type="text" className="form-control" placeholder="phone number"></input>  
            </div>
            <div className="form-group col-12 col-sm-4">
             <label htmlFor="fax">Fax</label>
              <input type="text" className="form-control" placeholder="fax"></input>   
            </div>
            <div className="form-group col-12 col-sm-4">
             <label htmlFor="email">Email</label>
             <input type="text" className="form-control" placeholder="Enter email"></input>  
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
            <p><b>Place of performance</b></p>
            <div className="form-row col-12 col-sm-12">
            <div className="form-group col-12 col-sm-4">
             <label htmlFor="number">Phone number</label>
              <input type="text" className="form-control" placeholder="phone number"></input>   
            </div>
            <div className="form-group col-12 col-sm-4">
             <label htmlFor="addres">Address</label>
             <input type="text" className="form-control" placeholder="Enter address"></input>  
            </div>
            <div className="form-group col-12 col-sm-4">
             <label htmlFor="city">City</label>
              <input type="text" className="form-control" placeholder="city"></input>   
            </div>
            </div>
            <div className="form-row col-12 col-sm-12">
           
            <div className="form-group col-12 col-sm-4">
             <label htmlFor="state">State</label>
             <input type="text" className="form-control" placeholder="state"></input>  
            </div>
            <div className="form-group col-12 col-sm-4">
             <label htmlFor="code">Zip Code</label>
              <input type="text" className="form-control" placeholder="zip code"></input>   
            </div>
            <div className="form-group col-12 col-sm-4">
             <label htmlFor="website">Website</label>
             <input type="text" className="form-control" placeholder="website"></input>  
            </div>
            </div>
            <div className="form-row col-12 col-sm-12">
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

       
        <form className="main-form" onSubmit={handleSubmit}>


       <div className="form-row col-12 col-sm-12">
         <div className="form-group col-12 col-sm-6">
             <label htmlFor="sub-tier">Sub-tier</label>
              <input type="text" className="form-control" placeholder="Sub-tier"></input>   
         </div>
         <div className="form-group col-12 col-sm-6">
             <label htmlFor="command">Major Command</label>
             <input type="text" className="form-control" placeholder="Major Command"></input>  
          </div>
       </div>

       <div className="form-row col-12 col-sm-12">
         <div className="form-group col-12 col-sm-6">
             <label htmlFor="office">Office</label>
              <input type="text" className="form-control" placeholder="office"></input>   
         </div>
         <div className="form-group col-12 col-sm-6">
             <label htmlFor="notice">Notice Type</label>
             <input type="text" className="form-control" placeholder="Notice Type"></input>  
          </div>
       </div>

       <div className="form-row col-12 col-sm-12">
         <div className="form-group col-12 col-sm-6">
             <label htmlFor="date">Original Publish date</label>
              <input type="date" className="form-control"></input>   
         </div>
         <div className="form-group col-12 col-sm-6">
             <label htmlFor="date">Last Publish date</label>
              <input type="date" className="form-control"></input>   
         </div>
       </div>

       <div className="form-row col-12 col-sm-12">
         <div className="form-group col-12 col-sm-6">
             <label htmlFor="date">Offer Due Date</label>
              <input type="date" className="form-control"></input>   
         </div>
         <div className="form-group col-12 col-sm-6">
             <label htmlFor="date">Inactive Date</label>
              <input type="date" className="form-control"></input>   
         </div>
       </div>

       <div className="form-row col-12 col-sm-12">
         <div className="form-group col-12 col-sm-6">
             <label htmlFor="">Original Set Aside</label>
              <input type="text" className="form-control" placeholder="Original Set Aside"></input>   
         </div>
         <div className="form-group col-12 col-sm-6">
             <label htmlFor="code">Product Service Code</label>
              <input type="text" className="form-control" placeholder="Service Code"></input>   
         </div>
       </div>

       <div className="form-row col-12 col-sm-12">
         <div className="form-group col-12 col-sm-6">
             <label htmlFor="code">NAICS Code </label>
              <input type="text" className="form-control" placeholder="Code "></input>   
         </div>
         <div className="form-group col-12 col-sm-6">
             <label htmlFor="code"> Code Defination</label>
              <input type="text" className="form-control" placeholder="Code Defination"></input>   
         </div>
       </div>
       
       
       <div className="form-row col-12 col-sm-12">
         <div className="form-group col-12 col-sm-6">
         <label htmlFor="date">Enter End-User Information</label><br/>
           <a className="btn btn-warning" style={{color:'white'}} href="/#"  data-toggle="modal" data-target="#myModal2">End User Information</a>
         </div>
         <div className="form-group col-12 col-sm-6">
         <label htmlFor="date">Enter Buyer Information</label><br/>
         <a className="btn btn-warning" style={{color:'white'}} href="/#"  data-toggle="modal" data-target="#myModal">Buyer Information</a>
         </div>
       </div>

       <div className="form-row col-12 col-sm-12">
         <div className="form-group col-12 col-sm-6">
              <label htmlFor="proposal">Proposal Sent </label>
              <select className="form-control" onChange={proposalHandle}>
              
                <option value="yes">Yes</option>
                <option value="no" selected>No</option>
              </select>
         </div>
         <div className="form-group col-12 col-sm-6">
             <label htmlFor="date">Proposal Sent Date </label>
              <input type="date" className="form-control" placeholder="Enter proposal date"    disabled={proposal}></input>  
             <label htmlFor="name">Proposal Sent Author's Name</label>
              <input type="text" className="form-control" placeholder="Enter author name"  disabled={proposal}></input>   
         </div>
       </div>
      
        <br/><br/>
       
        <input type="submit"  style={Style} className="form-control" value="Submit"></input>
        <input type="submit"  style={Style} className="form-control" value="Reset"></input>
       
        </form>
        </div>
        </div>
        </div>
        </div>
        </div>
        </>
    )
}

export default Solicitated;