import React from "react"
import {BrowserRouter, Route, Link, Switch} from "react-router-dom"
import { Container, Navbar,  } from "react-bootstrap"
import MainPage from "./MainPage"
import AddForm from "./AddForm"
import navImage from "./assets/1.png"
import Search from "./Search"

const TopBar=()=>{
    return(
        <BrowserRouter>
            <Navbar bg="light" expand="lg" className="sticky-top">
                <Link to="/"><Navbar.Brand href="#home"><img width="40" height="40" src={navImage} alt="nav"/></Navbar.Brand></Link>
            </Navbar>
        
            
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route path="/addUser" component={AddForm} />
                <Route path="/search" component={Search} />
            </Switch>
            
        </BrowserRouter>
    )
}
export default TopBar