import axios from "axios"
import React, { useState } from "react"
import {Link} from "react-router-dom"
import {Form, Button, Row, Col, Container} from "react-bootstrap"

const MainPage =()=>{
    const[query, setQuery]= useState("")

    const handleChange=(event)=>{
        setQuery(event.target.value)
        console.log(query)
    }

    const handleSubmit=(event)=>{
        event.preventDefault()
        console.log("clicked")
        axios.get(`https://sheet.best/api/sheets/566ada79-9156-4425-a5f2-f9054003de35/Name/*${query}*`)
        .then(
            response=>{
                console.log(response)
            }
        )
    }


    return(
           <Container fluid>
               <Row>
                   <Col md="2">
                       <p>Sidebar</p>
                       <Link to="/addUser"><Button variant="danger" block><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>Add a birthday</Button></Link>
                       <h5>View Birthdays</h5>
                       <ul>
                            <li>This Month</li>
                            <li>Next Month</li>
                            <li>All Months</li>
                       </ul>
                       
                   </Col>
                   <Col md="10">
                       <Col md={{span: 8, offset: 2}}>
                       <Form onSubmit={handleSubmit}>
                           <Form.Group>
                               <Form.Control className="special" placeholder="Search for a friend's birthday" name="search" onChange={handleChange}/>
                               <Button size="md" type="submit" block>Search</Button>
                           </Form.Group>
                       </Form>
                       </Col>
                       <h1>Birthdays this Month</h1>
                   </Col>
               </Row>
           </Container>
    )
}
export default MainPage