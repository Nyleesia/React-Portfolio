import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Head = (props) => {
    return(
        <header className = "header">
            <Navbar>
                <Navbar.Brand href = "/" >
                    Nyleesia Nicome Schnarr
                </Navbar.Brand>

                <Nav>
                    <Nav.Link
                        href = "/" > Home 
                    </Nav.Link>

                    <Nav.Link
                        href = "/projects" > Projects 
                    </Nav.Link>

                     {/* <Nav.Link
                        href = "/blog">Blog  
                    </Nav.Link>

                    <Nav.Link
                        href = "/research">Research  
                    </Nav.Link> */}
                                    <Nav.Link
                        href = "/contact">Contact  
                    </Nav.Link>     
                </Nav>               

            </Navbar>

        </header>
    )
}

export default Head;