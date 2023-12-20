import {Nav,Navbar,Container} from 'react-bootstrap';

import {Link} from 'react-router-dom'
// import Container from 'react-bootstrap/Container';

function Header(){
    return(
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand>Blog</Navbar.Brand>
                    <Nav className="me-auto navbar_wrapper">
                        <Link to="/">Home</Link>
                        <Link to="/create">Add Blog</Link>
                    </Nav>
                </Container>
            </Navbar>

        </div>
    )
}
export default Header;