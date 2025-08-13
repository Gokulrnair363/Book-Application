
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <footer>
   
      
        <Row className="text-center  bg-primary " >
        
          <Col md={6} className="mb-4">
            <h5>About Us</h5>
            <p style={{ fontSize: "0.9rem", opacity: 0.9 }}>
              We provide a user-friendly platform to explore and manage books
              with ease. Secure login, smooth navigation, and clean design.
            </p>
          </Col>

       

         
          <Col md={6} className="mb-4">
            <h5>Contact</h5>
            <p style={{ fontSize: "0.9rem", marginBottom: "5px" }}>
               support@bookapp.com
            </p>
            <p style={{ fontSize: "0.9rem", marginBottom: "5px" }}>
               +91 9999999999
            </p>
            <p style={{ fontSize: "0.9rem" }}>Kochi, Kerala</p>
          </Col>
             <Col className="text-center mt-3" style={{ fontSize: "0.85rem", opacity: 0.8 }}>
            © {new Date().getFullYear()} BookApp. All Rights Reserved.
          </Col>
        </Row>
       
     
    </footer>
  );
};

export default Footer;
