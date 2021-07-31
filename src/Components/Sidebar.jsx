import React from "react"
import {Button,Col} from "react-bootstrap"
import {Link} from "react-router-dom"

const Sidebar=(props)=>{
    return(
        <Col md="2" className="custom">
                       <p>Sidebar</p>
                       <Link to="/addUser"><Button variant="danger" block><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>Add a birthday</Button></Link>
                        <Link to="/search"><Button variant="primary" block>Search</Button></Link>
                       <h5>View Birthdays</h5>
                    
                        <Button>This Month</Button>
                        <Button onClick={props.clickFunction}>Next Month</Button>
                        <Button variant="primary custom">All Months</Button>
        </Col>
    )
}
export default Sidebar