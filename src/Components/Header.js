import React, { Component } from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div>
                 <Navbar bg="dark" variant="dark">
                    <Navbar.Brand >Covid-19</Navbar.Brand>
                    <Nav className="mr-auto">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link  className="nav-link" to="/india">India</Link>
                    <Link  className="nav-link" to="/world">World</Link>
                    </Nav>
                    
                </Navbar>
            </div>
        )
    }
}
