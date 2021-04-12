import React from "react"
import {BrowserRouter, Route, Link} from "react-router-dom"
import { Navbar,  } from "react-bootstrap"
import MainPage from "./MainPage"
import AddForm from "./AddForm"

const TopBar=()=>{
    return(
        <BrowserRouter>
        <Navbar bg="light" expand="lg" className="sticky-top">
            <Link to="/"><Navbar.Brand href="#home">Birthday App</Navbar.Brand></Link>
        </Navbar>

        <Route exact path="/" component={MainPage}/>
        <Route path="/addUser" component={AddForm}/>
        </BrowserRouter>
    )
}
export default TopBar