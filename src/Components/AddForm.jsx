import React from "react"
import {Card, Form, Col} from "react-bootstrap"

const AddForm=()=>{
    return(
        <Card>
            <Card.Body>
        <Form>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control  placeholder="Enter your friend's name" name="Name" type="" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control  placeholder="Enter your friend's email address" name="Email" type="" />
            </Form.Group>
            <Form.Row>
            <Form.Group as={Col}>
                <Form.Label>Month of Birth</Form.Label>
                <Form.Control as="select">
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
                <Form.Control  placeholder="Enter your friend's day of birth e.g 19" name="Day of Birth" type="" />
            </Form.Group>
            </Form.Row>
            
        </Form>
        </Card.Body>
        </Card>
    )
}
export default AddForm