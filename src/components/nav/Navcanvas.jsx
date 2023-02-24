import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import Navv from './Nav';
import { navList } from './navList';
import {svgs} from './svgIcons'
function OffcanvasExample() {
  return (
    <>
      {[false,].map((expand) => (
        <Navbar key={expand} collapseOnSelect  expand={expand} className="mx-0 nav1 text-light ">
          <Container fluid className=''>
            <Navbar.Brand href="#" className='text-light logo-box'>
             <span className='logo'> {svgs.logo}</span> 
              <span>Bluetup.</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className='d-md-none text-light border-0 me-5 ' id='navbar-toggler-icon' />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton className='navbg'>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <div className="logo-can">
                <span className='logo'> {svgs.logo}</span> 
              <span>Bluetup.</span>

                  </div>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className='navcanvase'>
                <Nav className="justify-content-end flex-grow-1">
                
                  {
                    navList.map(item=> {
                      return (
                        <Nav key={item.id}>
                           {!item.body && <Nav.Link href={`#${item.href}`}>
                            <Link to={item.href}>
                              <span className="me-3">{item.icon1}</span>
                            {item.text}
                            </Link>
                            </Nav.Link>}
                           {
                             
                             item.body &&
                             <div className='d-flex align-items-center'> 
                             {item.body && <span className="me-3 align-self-start">{item.icon1}</span>}
                             <NavDropdown
                             title={item.text}
                             id={`offcanvasNavbarDropdown-expand-${expand}`}
                             className='navcanvase'
                             >
                            {
                               item.body.map((list,i)=> {
                                return (
                                    <NavDropdown.Item key={i} href={`#${list.href}`}>
                                      <Link to={list.href} > {list.text}</Link>
                                      </NavDropdown.Item>
    
                                )
                               }) 
                              }
                              </NavDropdown>
                           </div>
                          
                    
                    
                       }
                        </Nav>
                      )
                    })
                  }
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
              <Navv />
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;