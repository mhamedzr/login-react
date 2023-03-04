import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
        return (

                <>
                        <Navbar id='high' bg='success' variant="success" >
                                <Container>
                                        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                                </Container>
                        </Navbar>
                </>

        )
}

export default Header