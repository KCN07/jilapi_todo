import React from 'react'

function Alltodos() {
    return (
        <div>
            <div className="container">
    
    <h1 style={{color: "White", textAlign: "center", marginTop: "20px", fontFamily: "serif", fontWeight: "bolder"}}><button type="button" className="btn btn-default btn-circle-sm"><i className="fa fa-check"></i>
    </button> All Todos</h1>
     <div>
         <div className="mt-1 " style={{textAlign: "right"}}>
      <input type="submit" className="btn btn-primary btn-circle " style={{fontWeight: "bolder", fontSize: "40px", backgroundColor: "lightseagreen", paddingTop: "2px"}} data-toggle="modal" data-target="#myModal"
      value="+" />
    </div>
    <div className="modal fade" id="myModal" role="dialog">
      <div className="modal-dialog">
  
        
        <div className="modal-content" style={{backgroundColor: "rgb(166, 228, 207)"}}>
          <div className="modal-header">
  
            <h4 className="modal-title" style={{color:"green"}}>Add New ToDo</h4>
            <button type="button" className="close" data-dismiss="modal">&times;</button>
          </div>
          <div className="modal-body">
            <input type="text" className="form-control add-todo" placeholder="Add todo" />
  
            <div className="form-group mt-2">
  
              <label for="id_pub_date">Deadline:</label>
              <input type="date" id="date" style={{border: "1px solid #d4d4d4", backgroundColor: "#f7f7f7"}}
                value="" />
  
              <input type="time" id="appt" name="appt" />
  
            </div>
  
          </div>
          <div class="modal-footer">
            <a role="button" className="btn btn-success" href="#">Yes</a>
            <button type="button" className="btn btn-primary" data-dismiss="modal">Cancel</button>
          </div>
        </div>
  
      </div>
    </div>
    </div>
    
  
    <div className="todos">
       <div className="row mt-2"> 
          <div className="col-md-6 mb-5">
      <div className="card shadow-lg" style={{width: "35rem", marginTop: "3rem", borderRadius: ".55rem", fontFamily: "serif"}}>
          <div className="card-body">
              <div className="head">
                  <h5 className="card-title" style={{fontWeight: "bolder", fontSize: "xx-large", color: "lightseagreen"}}>Finishing the project <small style={{color: "red"}}>(important)</small></h5>
                  
              </div>
            
            <h6 className="card-subtitle mb-2 text-muted">Deadline:</h6>
            <p className="card-text" style={{fontSize: "larger"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit expedita dicta beatae aspernatur neque ipsam aut eaque excepturi illum maiores?</p>
            <h6 className="card-subtitle mb-2 text-muted">Created at:</h6>
            <h6 className="card-subtitle mb-2 text-muted">Updated at:</h6>
           
            <a className="btn btn-danger" href="#" role="button" style={{float: "right"}}>Delete</a>
            <a className="btn btn-success" href="#" role="button" style={{float: "right", marginRight: "10px"}}>Edit</a>
          </div>
        </div>
  
        <div className="card shadow-lg" style={{width: "35rem", marginTop: "3rem", borderRadius: ".55rem", fontFamily: "serif"}}>
          <div className="card-body">
              <div className="head">
                  <h5 className="card-title" style={{fontWeight: "bolder", fontSize: "xx-large", color: "lightseagreen"}}>Finishing the project <small style={{color: "red"}}>(important)</small></h5>
                  
              </div>
            
            <h6 className="card-subtitle mb-2 text-muted">Deadline:</h6>
            <p className="card-text" style={{fontSize: "larger"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit expedita dicta beatae aspernatur neque ipsam aut eaque excepturi illum maiores?</p>
            <h6 className="card-subtitle mb-2 text-muted">Created at:</h6>
            <h6 className="card-subtitle mb-2 text-muted">Updated at:</h6>
           
            <a className="btn btn-danger" href="#" role="button" style={{float: "right"}}>Delete</a>
            <a className="btn btn-success" href="#" role="button" style={{float: "right", marginRight: "10px"}}>Edit</a>
          </div>
        </div>
  
        <div className="card shadow-lg" style={{width: "35rem", marginTop: "3rem", borderRadius: ".55rem", fontFamily: "serif"}}>
          <div className="card-body">
              <div className="head">
                  <h5 className="card-title" style={{fontWeight: "bolder", fontSize: "xx-large", color: "lightseagreen"}}>Finishing the project <small style={{color: "red"}}>(important)</small></h5>
                  
              </div>
            
            <h6 className="card-subtitle mb-2 text-muted">Deadline:</h6>
            <p className="card-text" style={{fontSize: "larger"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit expedita dicta beatae aspernatur neque ipsam aut eaque excepturi illum maiores?</p>
            <h6 className="card-subtitle mb-2 text-muted">Created at:</h6>
            <h6 className="card-subtitle mb-2 text-muted">Updated at:</h6>
           
            <a className="btn btn-danger" href="#" role="button" style={{float: "right"}}>Delete</a>
            <a className="btn btn-success" href="#" role="button" style={{float: "right", marginRight: "10px"}}>Edit</a>
          </div>
        </div>
          </div>
           <div className="col-md-1"></div>
          <div className="col-md-5">
              <div className="card shadow-lg p-4 bg-white rounded" style={{width: "30rem", marginTop: "3rem", borderFadius: ".55rem", fontFamily: "serif"}}>
                <h2  style={{fontWeight: "bolder",  color: "lightseagreen"}}>Already Done</h2>
                <ul id="done-items" className="list-unstyled">
      
                  <li><input type="checkbox" value="" checked style={{float: "left", marginRight: "10px"}} />Some item <button
                      className="remove-item btn btn-default btn-xs " style={{float: "right"}}><i className="far fa-times-circle"></i>
                    </button></li>
                    <li><input type="checkbox" value="" checked style={{float: "left", marginRight: "10px"}} />Some item <button
                      className="remove-item btn btn-default btn-xs " style={{float: "right"}}><i className="far fa-times-circle"></i>
                    </button></li>
                    <li><input type="checkbox" value="" checked style={{float: "left", marginRight: "10px"}} />Some item <button
                      className="remove-item btn btn-default btn-xs " style={{float: "right"}}><i className="far fa-times-circle"></i>
                    </button></li>
                    <li><input type="checkbox" value="" checked style={{float: "left", marginRight: "10px"}} />Some item <button
                      className="remove-item btn btn-default btn-xs " style={{float: "right"}}><i className="far fa-times-circle"></i>
                    </button></li>
                    <li><input type="checkbox" value="" checked style={{float: "left", marginRight: "10px"}} />Some item <button
                      className="remove-item btn btn-default btn-xs " style={{float: "right"}}><i className="far fa-times-circle"></i>
                    </button></li>
                    <li><input type="checkbox" value="" checked style={{float: "left", marginRight: "10px"}} />Some item <button
                      className="remove-item btn btn-default btn-xs " style={{float: "right"}}><i className="far fa-times-circle"></i>
                    </button></li>
                    <li><input type="checkbox" value="" checked style={{float: "left", marginRight: "10px"}} />Some item <button
                      className="remove-item btn btn-default btn-xs " style={{float: "right"}}><i className="far fa-times-circle"></i>
                    </button></li>
      
                </ul>
              </div>
            </div>
    </div>
    </div>
  </div>
        </div>
    )
}

export default Alltodos
