import React from 'react'
import { Redirect } from 'react-router-dom'

function dashboard(props) {
    if (props.isAuthenticated) {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-5" style={{ color: "lightseagreen", fontWeight: "bolder", fontSize: "x-large", fontFamily: "serif" }}>
                            <div className="shadow-lg p-4  rounded todolist not-done " style={{ marginTop: "90px", marginBottom: "50px" }}>
                                <h1 style={{ fontWeight: "bolder" }}>Todos</h1>
                                <div >
                                    <div className="mt-1 mb-2" style={{ textAlign: "right" }}>
                                        <input type="submit" className="btn btn-primary btn-circle mb-3" style={{ fontWeight: "bolder", fontSize: "40px", backgroundColor: "lightseagreen" }} data-toggle="modal" data-target="#myModal"
                                            value="+" />
                                    </div>




                                        <div className="modal fade" id="myModal" role="dialog">
                                            <div className="modal-dialog">

                                                
                                        <div className="modal-content" style={{ backgroundColor: "rgb(166, 228, 207)" }}>
                                                    <div className="modal-header">

                                                        <h4 className="modal-title" style={{ color: "green" }}>Add New ToDo</h4>
                                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <input type="text" className="form-control add-todo" placeholder="Add todo" />

                                                            <div className="form-group mt-2">

                                                                <label for="id_pub_date">Deadline:</label>
                                                                <input type="date" id="date" style={{ border: "1px solid #d4d4d4", backgroundColor: "#f7f7f7" }}
                                                                    value="" />

                                                                    <input type="time" id="appt" name="appt" />

                                                </div>

                                            </div>
                                                                <div className="modal-footer">
                                                                    <a role="button" className="btn btn-success" href="#">Yes</a>
                                                                    <button type="button" className="btn btn-primary" data-dismiss="modal">Cancel</button>
                                                                </div>
                                                            </div>

                                    </div>
                                                    </div>
                                                </div>

                                                <ul id="sortable" className="list-unstyled">
                                                    <li className="ui-state-default">

                                                        <div className="checkbox col-sm-12 " style={{ textAlign: "left" }}>
                                                            <label>
                                                                <input type="checkbox" value="" />Swe Class</label>
                                                            <button className="remove-item btn btn-default btn-xs " style={{ float: "right", color: "lightseagreen" }}><i
                                                                className="far fa-trash-alt"></i>
                                                            </button>
                                                            <button className="remove-item btn btn-default btn-xs " style={{ float: "right", color: "lightseagreen" }}><i className="fas fa-edit"></i>
                                                            </button>

                                                        </div>
                                                        <div className="col-sm-3 pb-2">

                                                            <small><em>2020-09-25 </em></small>
                                                            <small ><em>1.00pm </em></small>

                                                        </div>

                                                    </li>

                                                    <li className="ui-state-default">

                                                        <div className="checkbox col-sm-12 ">
                                                            <label>
                                                                <input type="checkbox" value="" />Call Golapi</label>

                                                            <button className="remove-item btn btn-default btn-xs " style={{ float: "right", color: "lightseagreen" }}><i
                                                                className="far fa-trash-alt"></i>
                                                            </button>
                                                            <button className="remove-item btn btn-default btn-xs " style={{ float: "right", color: "lightseagreen" }}><i className="fas fa-edit"></i>
                                                            </button>
                                                        </div>
                                                        <div className="col-sm-3 pb-2">

                                                            <small><em>2020-09-25 </em></small>
                                                            <small><em>5.30pm </em></small>

                                                        </div>
                                                    </li>

                                                    <li className="ui-state-default">

                                                        <div className="checkbox col-sm-12 " style={{ textAlign: "left" }}>
                                                            <label>
                                                                <input type="checkbox" value="" style=" position: relative;" />Zombie ditective [series] </label>

                                                            <button className="remove-item btn btn-default btn-xs " style={{ float: "right", color: "lightseagreen" }}><i
                                                                className="far fa-trash-alt"></i>
                                                            </button>
                                                            <button className="remove-item btn btn-default btn-xs " style={{ float: "right", color: "lightseagreen" }}><i className="fas fa-edit"></i>
                                                            </button>
                                                        </div>
                                                        <div className="col-sm-3 pb-2">

                                                            <small><em>2020-09-26 </em></small>
                                                            <small><em>11.53pm </em></small>

                                                        </div>

                                                    </li>
                                                </ul>
                                                <div className="todo-footer">
                                                    <strong><span className="count-todos"></span></strong> Items Left
                            </div>
                                            </div>
                                        </div>


                                        <div className="col-md-2"></div>

                                        <div className="col-md-5" style={{ color: "lightseagreen", fontWeight: "bolder", fontSize: "x-large", fontFamily: "serif" }}>
                                            <div className="shadow-lg p-4  rounded todolist not-done " style={{ marginTop: "90px", marginBottom: "50px" }}>
                                                <h1 style={{ fontWeight: "bolder" }}>Schedules</h1>
                                                <div >
                                                    <div className="mt-1 mb-2" style={{ textAlign: "right" }}>
                                                        <input type="submit" className="btn btn-primary btn-circle mb-3 " style={{ fontWeight: "bolder", fontSize: "40px", backgroundColor: "lightseagreen" }} data-toggle="modal" data-target="#myModal"
                                                            value="+" />
          </div>




                                                        <div className="modal fade" id="myModal1" role="dialog">
                                                            <div className="modal-dialog">

                                                                
              <div className="modal-content" style={{ backgroundColor: "rgb(166, 228, 207)" }}>
                                                                    <div className="modal-header">

                                                                        <h4 className="modal-title" style={{ color: "green" }}>Add New ToDo</h4>
                                                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                                    </div>
                                                                    <div className="modal-body">
                                                                        <input type="text" className="form-control add-todo" placeholder="Add todo" />

                                                                            <div className="form-group mt-2">

                                                                                <label for="id_pub_date">Deadline:</label>
                                                                                <input type="date" id="date1" style={{ border: "1px solid #d4d4d4", backgroundColor: "#f7f7f7" }}
                                                                                    value="" />

                                                                                    <input type="time" id="appt1" name="appt" />

                  </div>

                </div>
                                                                                <div className="modal-footer">
                                                                                    <a role="button" className="btn btn-success" href="#">Yes</a>
                                                                                    <button type="button" className="btn btn-primary" data-dismiss="modal">Cancel</button>
                                                                                </div>
                                                                            </div>

            </div>
                                                                    </div>
                                                                </div>

                                                                <ul id="sortable1" className="list-unstyled">
                                                                    <li className="ui-state-default">

                                                                        <div className="checkbox col-sm-12 " style="text-align: left;">
                                                                            <label>
                                                                                <input type="checkbox" value="" />Swe Class</label>
                                                                            <button className="remove-item btn btn-default btn-xs " style={{ float: "right", color: "lightseagreen" }}><i
                                                                                className="far fa-trash-alt"></i>
                                                                            </button>
                                                                            <button className="remove-item btn btn-default btn-xs " style={{ float: "right", color: "lightseagreen" }}><i className="fas fa-edit"></i>
                                                                            </button>

                                                                        </div>
                                                                        <div className="col-sm-3 pb-2">

                                                                            <small ><em>2020-09-25 </em></small>
                                                                            <small ><em>1.00pm </em></small>

                                                                        </div>

                                                                    </li>

                                                                    <li className="ui-state-default">

                                                                        <div className="checkbox col-sm-12 ">
                                                                            <label>
                                                                                <input type="checkbox" value="" />Call Golapi</label>

                                                                            <button className="remove-item btn btn-default btn-xs " style={{ float: "right", color: "lightseagreen" }}><i
                                                                                className="far fa-trash-alt"></i>
                                                                            </button>
                                                                            <button className="remove-item btn btn-default btn-xs " style={{ float: "right", color: "lightseagreen" }}><i className="fas fa-edit"></i>
                                                                            </button>
                                                                        </div>
                                                                        <div className="col-sm-3 pb-2">

                                                                            <small><em>2020-09-25 </em></small>
                                                                            <small><em>5.30pm </em></small>

                                                                        </div>
                                                                    </li>

                                                                    <li className="ui-state-default">

                                                                        <div className="checkbox col-sm-12 " style={{ textAlign: "left" }}>
                                                                            <label>
                                                                                <input type="checkbox" value="" style={{ position: "relative" }} />Zombie ditective [series] </label>

                                                                            <button className="remove-item btn btn-default btn-xs " style={{ float: "right", color: "lightseagreen" }}><i
                                                                                className="far fa-trash-alt"></i>
                                                                            </button>
                                                                            <button className="remove-item btn btn-default btn-xs " style={{ float: "right", color: "lightseagreen" }}><i className="fas fa-edit"></i>
                                                                            </button>
                                                                        </div>
                                                                        <div className="col-sm-3 pb-2">

                                                                            <small><em>2020-09-26 </em></small>
                                                                            <small><em>11.53pm </em></small>

                                                                        </div>

                                                                    </li>
                                                                </ul>
                                                                <div className="todo-footer">
                                                                    <strong><span className="count-todos"></span></strong> Items Left
                    </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
        )
    }
    else{
        return (<Redirect to="/account" />)
            
    }
    
}

export default dashboard
