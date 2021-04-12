import axios from "axios"
import React, { useState } from "react"
import {Card, Form, Col, Button, Container} from "react-bootstrap"

const AddForm=()=>{
    const initialFriend={
        Name:"",
        Email:"",
        monthOfBirth:"",
        dayOfBirth:"",
    }
    const [friend, setFriend]= useState(initialFriend)

    const handleChange=(event)=>{
        setFriend({...friend, [event.target.name]: event.target.value})
    }

    const handleSubmit=(event)=>{
            event.preventDefault()
            console.log("Form submitted")
            //Add axois post operation here
            axios.post("https://sheet.best/api/sheets/7cf28ec6-9e9d-4ab6-bb87-7067faffe0bb", friend)
            .then(
                response=>{
                    console.log(response)
                }
            )
            console.log(friend)
    }


    return(
        <Container className="custom">
        <Card>
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control placeholder="Enter your friend's name" name="Name" type="text" onChange={handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control placeholder="Enter your friend's email address" name="Email" type="text" onChange={handleChange} />
                    </Form.Group>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Month of Birth</Form.Label>
                            <Form.Control as="select" onChange={handleChange} name="monthOfBirth">
                                <option>January</option>
                                <option>February</option>
                                <option>March</option>
                                <option>April</option>
                                <option>May</option>
                                <option>June</option>
                                <option>July</option>
                                <option>August</option>
                                <option>September</option>
                                <option>October</option>
                                <option>November</option>
                                <option>December</option>

                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Day of Birth</Form.Label>
                            <Form.Control placeholder="Enter your friend's day of birth e.g 19" name="dayOfBirth" type="number" onChange={handleChange} />
                        </Form.Group>
                    </Form.Row>
                    <Button type="submit" size="md">Add Friend</Button>
                </Form>
            </Card.Body>
        </Card>
        </Container>    
    )
}
export default AddForm