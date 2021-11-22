import React from 'react';
import '../.././App.css';
import { Navbar, Nav, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import logo from '../../logo777.png';
function NavBar(){
    return (
	<>

		<Navbar className="navegacion">
		<Container>
		
		<Link to='/en-questas/'>
			<img src={logo} width='50px'/>
			<Navbar.Brand href="/en-questas/">EnQestas</Navbar.Brand>
		</Link>

		<Nav className="mx-auto">

		<Link to='/en-questas/encuesta'>
			<Nav.Link href="#Encuesta">Quiz</Nav.Link>
		</Link>

		<Link to='/en-questas/register'>
			<Nav.Link href="#Register">Register</Nav.Link>
		</Link>

		<Link to='/en-questas/login'>
			<Nav.Link href="#Login">Login</Nav.Link>
		</Link>

		<Link to='/en-questas/logout'>
			<Nav.Link href="#Logout">Logout</Nav.Link>
		</Link>

		</Nav>
		</Container>
		</Navbar>
	</>
    )
}

export default NavBar;