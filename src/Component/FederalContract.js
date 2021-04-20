import React,{useState} from "react";
import Solicitated from "./Solicitated";
import Awarded from "./Awarded";
import SourcesSought from "./SourcesSought";
const FederalContract =()=>{
    const[result,setresult]=useState({solicitated:'none', sourcessought:'none', awarded:'none'});
    const handleChange=(event)=>{
        console.log(event.target.value);
            if(event.target.value==="solicitated")
            {
                setresult({solicitated:'block',sourcessought:'none',awarded:'none'});
            }
            if(event.target.value==="sources sought")
            {
                setresult({solicitated:'none',sourcessought:'block',awarded:'none'});
            }
            if(event.target.value==="awarded")
            {
                setresult({solicitated:'none',sourcessought:'none',awarded:'block'});
            }
            if(event.target.value==="none")
            {
                setresult({solicitated:'none',sourcessought:'none',awarded:'none'});
            }
           
    }
    return(
        <>
        <div className="container">
        <div className="row">
        <div className="card">
        <div className="card-body">

        <h3 className="heading">Federal Contract</h3>
        <form className="main-form">

        <div className="form-row col-12 col-sm-12">
         <div className="form-group col-12 col-sm-6">
             <label htmlFor="name">Name</label>
              <input type="text" className="form-control" placeholder="Enter name"></input>   
         </div>
         <div className="form-group col-12 col-sm-6">
             <label htmlFor="id">Notice Id</label>
             <input type="text" className="form-control" placeholder="Enter notice id"></input>  
          </div>
       </div>

       <div className="form-row col-12 col-sm-12">
         <div className="form-group col-12 col-sm-6">
             <label htmlFor="agency">Agency</label>
              <input type="text" className="form-control" placeholder="Enter agency"></input>   
         </div>
         <div className="form-group col-12 col-sm-6">
             <label htmlFor="contract">Contract Type</label>
             <select className="form-control" onChange={handleChange}>
                 <option value="none">Choose Contract Type </option>
                 <option value="solicitated">Solicitated </option>
                 <option value="sources sought">Sources Sought</option>
                 <option value="awarded">Awarded </option>
             </select>
          </div>
       </div>
        </form>
        </div>
        </div>
        </div>
      <Solicitated value={result.solicitated}/>
      <SourcesSought value={result.sourcessought}/>
      <Awarded value={result.awarded}/>
        </div>
      
        </>
    )
}

export default FederalContract;