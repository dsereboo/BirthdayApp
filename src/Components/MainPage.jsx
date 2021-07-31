import axios from "axios"
import React, { useEffect, useState } from "react"
import {Link} from "react-router-dom"
import {Form, Button, Row, Col, Container} from "react-bootstrap"
import Sidebar from "./Sidebar"

const MainPage =()=>{
    const[query, setQuery]= useState("")
    const[queryResults, setQueryResults]=useState([])
    const[currentBdays, setCurrentBdays]=useState([])

    useEffect(
        ()=>{
            var DayDate= new Date()
            //Returns current month in full text 
            var Month=new Intl.DateTimeFormat('en-US', {month:"long"}).format(DayDate)
            axios.get(`https://sheet.best/api/sheets/7cf28ec6-9e9d-4ab6-bb87-7067faffe0bb/monthOfBirth/${Month}`)
            .then(response=>{setCurrentBdays(response.data)})
        },[]
    )    

    const handleChange=(event)=>{
        setQuery(event.target.value)
    }

    const handleSubmit=(event)=>{
        event.preventDefault()
        console.log("clicked")
        axios.get(`https://sheet.best/api/sheets/7cf28ec6-9e9d-4ab6-bb87-7067faffe0bb/Name/*${query}*`)
        .then(
            response=>{
                setQueryResults(response.data)
            }
        )
    }

    const getNextMonth=()=>{
       var today= new Date()
       var nextMonthValue= (today.getMonth())+1
       var setNextMonth= today.setMonth(nextMonthValue) 
       var nextMonth=new Intl.DateTimeFormat('en-US', {month:"long"}).format(today);
       return nextMonth
    }

    const handleClick=()=>{
       let month=getNextMonth()
       axios.get(`https://sheet.best/api/sheets/7cf28ec6-9e9d-4ab6-bb87-7067faffe0bb/monthOfBirth/*${month}*`)
       .then(response=>{
           setCurrentBdays(response.data)
        })

    }

    return(
           <Container fluid>
               <Row>
                   <Sidebar clickFunction={handleClick}/>
                   <Col md="10">
                       <Col md={{span: 8, offset: 2}}>
                       <Form onSubmit={handleSubmit}>
                           <Form.Group>
                               <Form.Control className="special" placeholder="Search for a friend's birthday" name="search" onChange={handleChange}/>
                               <Button size="md" type="submit" block>Search</Button>
                           </Form.Group>
                       </Form>
                       </Col>
                       <h1>Search results</h1>
                       {queryResults.map(
                           result=>(
                               <div>
                                <h1>{result.Name}</h1>
                                <p>{result.Email}</p>
                               </div>
                               
                           )
                       )}
                       <h1>Birthdays this Month</h1>
                       {currentBdays.map(
                           person=>(
                               <div>
                                   <h1>{person.dayOfBirth}</h1>
                                    <p>{person.Name}</p>
                                    <p>{person.Email}</p>
                               </div>
                           )
                       )}
                   </Col>
               </Row>
           </Container>
    )
}
export default MainPage